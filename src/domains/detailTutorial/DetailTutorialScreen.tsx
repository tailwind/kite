import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { Screen } from 'src/components/Screen';

export const DetailTutorialScreen: FC = () => (
  <Screen variant="scrolling" unsafe>
    <View>
      <Text>
        Many apps in life are built with lists, and sometimes you want more information about those lists. Detail views
        are a handy way to show descriptive data. Detail views make use of all of the screen real estate and will
        sometimes require a developer to hide things like tab bars. Place that screen in the{' '}
        <Text style={{ color: 'red', fontWeight: '700' }}>AppStackNavigator</Text> and show that detail screen like a
        pro.
      </Text>
    </View>
  </Screen>
);
