import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from 'src/domains/core/screens/AppNavigator';

/**
 * Main entry point of the application
 *
 * This is primarily for providers
 */
export const App: FC = () => (
  <SafeAreaProvider>
    <AppContainer />
  </SafeAreaProvider>
);

/**
 *
 */
const AppContainer: FC = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);
