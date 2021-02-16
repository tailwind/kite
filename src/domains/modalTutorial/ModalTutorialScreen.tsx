import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Screen } from 'src/components/Screen';

export const ModalTutorialScreen: FC = () => (
  <Screen variant="scrolling" unsafe>
    <View>
      <Text>This is a modal. Use it wisely.</Text>
    </View>
  </Screen>
);
