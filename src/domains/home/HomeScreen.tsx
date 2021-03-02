import React, { FC } from 'react';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';

export const HomeScreen: FC = () => (
  <Screen variant="centered">
    <Text fontWeight="black">Hello World</Text>
  </Screen>
);
