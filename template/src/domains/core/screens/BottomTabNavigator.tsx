import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import React, { FC } from 'react';
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
    <Tab.Screen name="PokemonListScreen" component={PokemonListScreen} />
    <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
  </Tab.Navigator>
);
