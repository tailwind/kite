import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { useNavigationRestore } from 'src/domains/core/hooks/useNavigationRestore';
import { RootStackNavigator } from 'src/domains/core/screens/RootStackNavigator';
import { theme } from 'src/theme';

enableScreens();

export const App: FC = () => {
  const { isReady, initialState, onStateChange } = useNavigationRestore();

  if (!isReady) return <ActivityIndicator />;

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer initialState={initialState} onStateChange={onStateChange}>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
