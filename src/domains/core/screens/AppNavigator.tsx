import { CompositeNavigationProp, NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { BottomTabNavigator, BottomTabNavigatorParams } from 'src/domains/core/screens/BottomTabNavigator';
import { ModalNavigatorProp } from 'src/domains/core/screens/ModalNavigator';
import { SplashScreen } from 'src/domains/core/screens/SplashScreen';
import { LandingNavigator } from 'src/domains/landing/screens/LandingNavigator';
import { TodoDetailScreen } from 'src/domains/todo/screens/TodoDetailScreen';
import { AppState } from 'src/state';
import { AuthState } from 'src/state/authSlice';

export type AppNavigatorParams = {
  SplashScreen: undefined;
  LandingNavigator: undefined;
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

export const AppNavigator: FC = () => {
  const authState = useSelector((state: AppState) => state.auth.authState);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authState === AuthState.Pending && <Stack.Screen name="SplashScreen" component={SplashScreen} />}
      {authState === AuthState.Unauthorized && <Stack.Screen name="LandingNavigator" component={LandingNavigator} />}
      {authState === AuthState.Authorized && (
        <>
          <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
          <Stack.Screen name="TodoDetailScreen" component={TodoDetailScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
