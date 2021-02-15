import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { BottomTabNavigator } from 'src/domains/core/screens/BottomTabNavigator';
import { ModalTutorialScreen } from 'src/domains/modalTutorial/ModalTutorialScreen';

export type RootStackNavigatorParams = {
  BottomTabNavigator: undefined;
  ModalTutorialScreen: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParams>();

export type RootStackNavigationProp<ScreenName extends keyof RootStackNavigatorParams> = StackNavigationProp<
  RootStackNavigatorParams,
  ScreenName
>;

export const RootStackNavigator: FC = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="ModalTutorialScreen" component={ModalTutorialScreen} />
  </Stack.Navigator>
);
