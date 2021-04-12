import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { Icon } from 'src/components/Icon';
import { AppNavigatorProp } from 'src/domains/core/screens/AppNavigator';
import { PokemonListScreen } from 'src/domains/pokemon/screens/PokemonListScreen';
import { SettingsScreen } from 'src/domains/settings/screens/SettingsScreen';

export type BottomTabNavigatorParams = {
  PokemonListScreen: undefined;
  SettingsScreen: undefined;
};

export type BottomTabNavigatorProp<ScreenName extends keyof BottomTabNavigatorParams> = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabNavigatorParams, ScreenName>,
  AppNavigatorProp<'BottomTabNavigator'>
>;

const Tab = createBottomTabNavigator<BottomTabNavigatorParams>();

export const BottomTabNavigator: FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="PokemonListScreen"
      component={PokemonListScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        tabBarLabel: 'Pokemon',
      }}
    />
    <Tab.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="settings" color={color} size={size} />,
        tabBarLabel: 'Settings',
      }}
    />
  </Tab.Navigator>
);
