import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { AppStackNavigatorProp } from 'src/domains/core/screens/AppStackNavigator';
import { HomeScreen } from 'src/domains/home/HomeScreen';

export type BottomTabNavigatorParams = {
  Home: undefined;
  Home1: undefined;
  Home2: undefined;
  Home3: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParams>();

export type BottomTabNavigatorProp<ScreenName extends keyof BottomTabNavigatorParams> = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParams, ScreenName>,
  AppStackNavigatorProp<'BottomTabNavigator'>
>;

export const BottomTabNavigator: FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Home1" component={HomeScreen} />
    <Tab.Screen name="Home2" component={HomeScreen} />
    <Tab.Screen name="Home3" component={HomeScreen} />
  </Tab.Navigator>
);
