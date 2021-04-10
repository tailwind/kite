import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { BottomTabNavigator, BottomTabNavigatorParams } from 'src/domains/core/screens/BottomTabNavigator';
import { PokemonDetailScreen } from 'src/domains/pokemon/screens/PokemonDetailScreen';

export type AppNavigatorParams = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabNavigatorParams>;
  PokemonDetailScreen: {
    pokemonId: string;
  };
};

export type AppNavigatorProp<ScreenName extends keyof AppNavigatorParams> = StackNavigationProp<
  AppNavigatorParams,
  ScreenName
>;

export type AppNavigatorRouteProp<ScreenName extends keyof AppNavigatorParams> = RouteProp<
  AppNavigatorParams,
  ScreenName
>;

const Stack = createStackNavigator<AppNavigatorParams>();

export const AppNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    <Stack.Screen name="PokemonDetailScreen" component={PokemonDetailScreen} />
  </Stack.Navigator>
);
