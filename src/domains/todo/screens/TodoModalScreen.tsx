import { useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { ModalNavigatorRouteProp } from 'src/domains/core/screens/ModalNavigator';

export const TodoModalScreen: FC = () => {
  const route = useRoute<ModalNavigatorRouteProp<'TodoModalScreen'>>();

  return (
    <Screen variant="scrolling" unsafe>
      <View>
        <Text>{route.params?.content || 'This is a modal. Use it wisely.'}</Text>
      </View>
    </Screen>
  );
};
