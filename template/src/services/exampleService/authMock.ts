import AsyncStorage from '@react-native-async-storage/async-storage';
import { nanoid } from '@reduxjs/toolkit';
import { User } from './types';

const PERSISTENCE_KEY = 'AUTH_MOCK';

export const getAuthenticated = async (): Promise<User | null> => {
  await new Promise(r => setTimeout(r, 1000));

  const userString = await AsyncStorage.getItem(PERSISTENCE_KEY);

  return userString ? JSON.parse(userString) : null;
};

export const login = async (payload: { email: string; password: string }): Promise<User> => {
  await new Promise(r => setTimeout(r, 1000));

  if (payload.email === 'invalid@example.com') {
    throw new Error('Invalid credentials');
  }

  const user = {
    id: nanoid(),
    name: 'Example User',
    ...payload,
  };

  await AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(user));

  return user;
};

export const logout = async (): Promise<void> => {
  await new Promise(r => setTimeout(r, 1000));

  await AsyncStorage.removeItem(PERSISTENCE_KEY);
};
