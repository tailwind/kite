import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { AppNavigator, AppNavigatorParams } from 'src/domains/core/screens/AppNavigator';
import { ModalTutorialScreen } from 'src/domains/modalTutorial/ModalTutorialScreen';

export type RootStackNavigatorParams = {
  AppNavigator: NavigatorScreenParams<AppNavigatorParams>;
  ModalTutorialScreen: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParams>();

export type RootStackNavigationProp<ScreenName extends keyof RootStackNavigatorParams> = StackNavigationProp<
  RootStackNavigatorParams,
  ScreenName
>;

export const RootStackNavigator: FC = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="ModalTutorialScreen" component={ModalTutorialScreen} />
  </Stack.Navigator>
);
