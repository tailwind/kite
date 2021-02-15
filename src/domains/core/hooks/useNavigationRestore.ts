import AsyncStorage from '@react-native-async-storage/async-storage';
import { InitialState, NavigationState } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { config } from 'src/config';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export const useNavigationRestore = (): {
  isReady: boolean;
  initialState?: InitialState;
  onStateChange: (state?: NavigationState) => void;
} => {
  const [isReady, setIsReady] = useState(!config.usesNavigationRestore);
  const [initialState, setInitialState] = useState<InitialState>();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (initialUrl === null) {
          // Only restore state if there's no deep link
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  const onStateChange = (state?: NavigationState) => {
    AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state));
  };

  return {
    isReady,
    initialState,
    onStateChange,
  };
};
