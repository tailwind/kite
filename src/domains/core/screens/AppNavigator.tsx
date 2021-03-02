import { CompositeNavigationProp, NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { BottomTabNavigator, BottomTabNavigatorParams } from 'src/domains/core/screens/BottomTabNavigator';
import { ModalNavigatorProp } from 'src/domains/core/screens/ModalNavigator';
import { TodoDetailScreen } from 'src/domains/todo/screens/TodoDetailScreen';

export type AppNavigatorParams = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorParams>;
  TodoDetailScreen: {
    todoId: string;
  };
};

const Stack = createStackNavigator<AppNavigatorParams>();

export type AppNavigatorProp<ScreenName extends keyof AppNavigatorParams> = CompositeNavigationProp<
  StackNavigationProp<AppNavigatorParams, ScreenName>,
  ModalNavigatorProp<'AppNavigator'>
>;

export type AppNavigatorRouteProp<ScreenName extends keyof AppNavigatorParams> = RouteProp<
  AppNavigatorParams,
  ScreenName
>;

export const AppNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="TodoDetailScreen" component={TodoDetailScreen} />
  </Stack.Navigator>
);
