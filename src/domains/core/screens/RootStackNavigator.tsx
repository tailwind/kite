import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { AppStackNavigator, AppStackNavigatorParams } from 'src/domains/core/screens/AppStackNavigator';
import { ModalTutorialScreen } from 'src/domains/modalTutorial/ModalTutorialScreen';

export type RootStackNavigatorParams = {
  AppStackNavigator: NavigatorScreenParams<AppStackNavigatorParams>;
  ModalTutorialScreen: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParams>();

export type RootStackNavigationProp<ScreenName extends keyof RootStackNavigatorParams> = StackNavigationProp<
  RootStackNavigatorParams,
  ScreenName
>;

export const RootStackNavigator: FC = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="AppStackNavigator" component={AppStackNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="ModalTutorialScreen" component={ModalTutorialScreen} />
  </Stack.Navigator>
);
