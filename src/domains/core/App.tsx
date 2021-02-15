import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootStackNavigator } from 'src/domains/core/screens/RootStackNavigator';

export const App: FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);
