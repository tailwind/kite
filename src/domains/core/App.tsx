import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import { ToastProvider, ToastRenderer } from 'src/components/Toast';
import { useNavigationRestore } from 'src/domains/core/hooks/useNavigationRestore';
import { ModalNavigator } from 'src/domains/core/screens/ModalNavigator';
import { SplashScreen } from 'src/domains/core/screens/SplashScreen';
import { AppDispatch, store } from 'src/state';
import { refreshAuth } from 'src/state/authSlice';
import { theme } from 'src/theme';

export const App: FC = () => (
  <ReduxProvider store={store}>
    <SafeAreaProvider>
      <ToastProvider>
        <ThemeProvider theme={theme}>
          <AppContainer />
        </ThemeProvider>
      </ToastProvider>
    </SafeAreaProvider>
  </ReduxProvider>
);

const AppContainer: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isReady, initialState, onStateChange } = useNavigationRestore();

  useEffect(() => {
    dispatch(refreshAuth());
  }, [dispatch]);

  return isReady ? (
    <NavigationContainer initialState={initialState} onStateChange={onStateChange}>
      <ModalNavigator />
      <ToastRenderer />
    </NavigationContainer>
  ) : (
      <SplashScreen />
    );
};
