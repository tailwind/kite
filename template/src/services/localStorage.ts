/* eslint-disable no-empty */
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LocalStorageTypes {
  theme: 'light' | 'dark';
}

type LocalStorageKey = keyof LocalStorageTypes;

const DEFAULT_VALUES: LocalStorageTypes = {
  theme: 'light',
};

/**
 * Loads something from storage and runs it thru JSON.parse.
 */
async function get<T extends LocalStorageKey>(key: T): Promise<LocalStorageTypes[T]> {
  try {
    const storedValue = (await AsyncStorage.getItem(key)) as string;
    return storedValue ? JSON.parse(storedValue) : DEFAULT_VALUES[key];
  } catch {
    return DEFAULT_VALUES[key];
  }
}

/**
 * Saves an object to storage.
 */
async function set<T extends LocalStorageKey>(key: T, value: LocalStorageTypes[T]): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

/**
 * Removes something from storage.
 */
async function remove(key: LocalStorageKey): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch {}
}

/**
 * Burn it all to the ground.
 */
async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch {}
}

export const localStorage = {
  get,
  set,
  remove,
  clear,
};
