import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider } from 'react-redux';
import { ToastProvider, ToastRenderer } from 'src/components/Toast';
import { useNavigationRestore } from 'src/domains/core/hooks/useNavigationRestore';
import { ModalNavigator } from 'src/domains/core/screens/ModalNavigator';
import { store } from 'src/state';
import { theme } from 'src/theme';


export const App: FC = () => {
  const { isReady, initialState, onStateChange } = useNavigationRestore();

  if (!isReady) return <ActivityIndicator />;

  return (
    <ToastProvider>
      <ReduxProvider store={store}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <NavigationContainer initialState={initialState} onStateChange={onStateChange}>
              <ModalNavigator />
              <ToastRenderer />
            </NavigationContainer>
          </ThemeProvider>
        </SafeAreaProvider>
      </ReduxProvider>
    </ToastProvider>
  );
};
