import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { HomeScreen } from 'src/domains/home/HomeScreen';

export type BottomTabNavigatorParamList = {
  Home: undefined;
  Home1: undefined;
  Home2: undefined;
  Home3: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const BottomTabNavigator: FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Home1" component={HomeScreen} />
    <Tab.Screen name="Home2" component={HomeScreen} />
    <Tab.Screen name="Home3" component={HomeScreen} />
  </Tab.Navigator>
);
