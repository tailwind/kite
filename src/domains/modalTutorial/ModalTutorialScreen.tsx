import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const ModalTutorialScreen: FC = () => (
  <View>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text>This is a modal. Use it wisely.</Text>
      </View>
    </ScrollView>
  </View>
);
