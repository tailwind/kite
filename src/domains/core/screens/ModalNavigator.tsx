import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { AppNavigator, AppNavigatorParams } from 'src/domains/core/screens/AppNavigator';
import { TodoModalScreen } from 'src/domains/todo/screens/TodoModalScreen';

export type ModalNavigatorParams = {
  AppNavigator: NavigatorScreenParams<AppNavigatorParams>;
  TodoModalScreen?: {
    content?: string;
  };
};

const Stack = createStackNavigator<ModalNavigatorParams>();

export type ModalNavigatorProp<ScreenName extends keyof ModalNavigatorParams> = StackNavigationProp<
  ModalNavigatorParams,
  ScreenName
>;

export type ModalNavigatorRouteProp<ScreenName extends keyof ModalNavigatorParams> = RouteProp<
  ModalNavigatorParams,
  ScreenName
>;

export const ModalNavigator: FC = () => (
  <Stack.Navigator mode="modal" initialRouteName="AppNavigator" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AppNavigator" component={AppNavigator} />
    <Stack.Screen name="TodoModalScreen" component={TodoModalScreen} options={{ headerShown: true }} />
  </Stack.Navigator>
);
