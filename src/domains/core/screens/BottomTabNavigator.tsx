import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeScreen } from 'src/domains/home/HomeScreen';

export type BottomTabNavigatorParmList = {
  Home: undefined;
};

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Home1" component={HomeScreen} />
      <Tab.Screen name="Home2" component={HomeScreen} />
      <Tab.Screen name="Home3" component={HomeScreen} />
    </Tab.Navigator>
  );
}
