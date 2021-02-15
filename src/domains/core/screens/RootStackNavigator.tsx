import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { BottomTabNavigator } from 'src/domains/core/screens/BottomTabNavigator';

export type RootStackNavigatorParamList = {
  BottomTabNavigator: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamList>();

export const RootStackNavigator: FC = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
  </Stack.Navigator>
);
