import React, { FC } from 'react';
import { View } from 'react-native';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';

export const DetailTutorialScreen: FC = () => (
  <Screen variant="scrolling" unsafe>
    <View>
      <Text>
        Many apps in life are built with lists, and sometimes you want more information about those lists. Detail views
        are a handy way to show descriptive data. Detail views make use of all of the screen real estate and will
        sometimes require a developer to hide things like tab bars. Place that screen in the{' '}
        <Text color="red.300" fontWeight="bold">
          AppNavigator
        </Text>{' '}
        and show that detail screen like a pro.
      </Text>
    </View>
  </Screen>
);
