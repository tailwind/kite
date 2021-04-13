import { ThemeProvider } from '@emotion/react';
import { StacksProvider } from '@mobily/stacks';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { AppNavigator } from 'src/domains/core/screens/AppNavigator';
import { navigationRef } from 'src/services/navigation';
import { store } from 'src/state';
import { theme } from 'src/theme';

/**
 * Main entry point of the application
 *
 * This is primarily for providers
 */
export const App: FC = () => (
  <ReduxProvider store={store}>
    <ThemeProvider theme={theme}>
      <StacksProvider>
        <SafeAreaProvider>
          <AppContainer />
        </SafeAreaProvider>
      </StacksProvider>
    </ThemeProvider>
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
