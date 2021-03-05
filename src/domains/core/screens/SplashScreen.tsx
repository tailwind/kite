import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import { Screen } from 'src/components/Screen';

export const SplashScreen: FC = () => (
  <Screen variant="centered">
    <ActivityIndicator />
  </Screen>
);
