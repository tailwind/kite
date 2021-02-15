import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { BottomTabNavigator, BottomTabNavigatorParams } from 'src/domains/core/screens/BottomTabNavigator';
import { RootStackNavigationProp } from 'src/domains/core/screens/RootStackNavigator';
import { DetailTutorialScreen } from 'src/domains/detailTutorial/DetailTutorialScreen';

export type AppStackNavigatorParams = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorParams>;
  DetailTutorialScreen: undefined;
};

const Stack = createStackNavigator<AppStackNavigatorParams>();

export type AppStackNavigatorProp<ScreenName extends keyof AppStackNavigatorParams> = CompositeNavigationProp<
  StackNavigationProp<AppStackNavigatorParams, ScreenName>,
  RootStackNavigationProp<'AppStackNavigator'>
>;

export const AppStackNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen name="DetailTutorialScreen" component={DetailTutorialScreen} />
  </Stack.Navigator>
);
