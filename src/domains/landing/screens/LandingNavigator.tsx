import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { LoginScreen } from 'src/domains/landing/screens/LoginScreen';

export type LandingNavigatorParams = {
  LoginScreen: undefined;
};

const Stack = createStackNavigator<LandingNavigatorParams>();

export const LandingNavigator: FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
);
