import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { AppStackNavigatorProp } from 'src/domains/core/screens/AppStackNavigator';
import { HomeScreen } from 'src/domains/home/HomeScreen';
import { AsyncLocalTodoScreen } from 'src/domains/todo/screens/AsyncLocalTodoScreen';
import { AsyncReduxTodoScreen } from 'src/domains/todo/screens/AsyncReduxTodoScreen';
import { SyncReduxTodoScreen } from 'src/domains/todo/screens/SyncReduxTodoScreen';

export type BottomTabNavigatorParams = {
  Home: undefined;
  SyncRedux: undefined;
  AsyncRedux: undefined;
  SyncLocal: undefined;
  AsyncLocal: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParams>();

export type BottomTabNavigatorProp<ScreenName extends keyof BottomTabNavigatorParams> = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParams, ScreenName>,
  AppStackNavigatorProp<'BottomTabNavigator'>
>;

export const BottomTabNavigator: FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="SyncRedux" component={SyncReduxTodoScreen} />
    <Tab.Screen name="AsyncRedux" component={AsyncReduxTodoScreen} />
    <Tab.Screen name="SyncLocal" component={HomeScreen} />
    <Tab.Screen name="AsyncLocal" component={AsyncLocalTodoScreen} />
  </Tab.Navigator>
);
