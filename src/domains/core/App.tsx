import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomTabNavigator } from 'src/domains/core/screens/BottomTabNavigator';

export const App: FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  </SafeAreaProvider>
);
