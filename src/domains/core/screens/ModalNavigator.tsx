import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { AppNavigator, AppNavigatorParams } from 'src/domains/core/screens/AppNavigator';
import { ModalTutorialScreen } from 'src/domains/modalTutorial/ModalTutorialScreen';

export type ModalNavigatorParams = {
  AppNavigator: NavigatorScreenParams<AppNavigatorParams>;
  ModalTutorialScreen: undefined;
};

const Stack = createStackNavigator<ModalNavigatorParams>();

export type ModalNavigatorProp<ScreenName extends keyof ModalNavigatorParams> = StackNavigationProp<
  ModalNavigatorParams,
  ScreenName
>;

export const ModalNavigator: FC = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="ModalTutorialScreen" component={ModalTutorialScreen} />
  </Stack.Navigator>
);
