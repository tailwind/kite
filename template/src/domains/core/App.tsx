import { StacksProvider } from '@mobily/stacks';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { AppNavigator } from 'src/domains/core/screens/AppNavigator';
import { navigationRef } from 'src/services/navigation';
import { store } from 'src/state';

/**
 * Main entry point of the application
 *
 * This is primarily for providers
 */
export const App: FC = () => (
  <ReduxProvider store={store}>
    <StacksProvider>
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </StacksProvider>
  </ReduxProvider>
);

/**
 *
 */
const AppContainer: FC = () => (
  <NavigationContainer ref={navigationRef}>
    <AppNavigator />
  </NavigationContainer>
);
