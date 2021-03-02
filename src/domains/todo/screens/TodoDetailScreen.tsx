import { useNavigation, useRoute } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { AppNavigatorProp, AppNavigatorRouteProp } from 'src/domains/core/screens/AppNavigator';

export const TodoDetailScreen: FC = () => {
  const route = useRoute<AppNavigatorRouteProp<'TodoDetailScreen'>>();
  const navigation = useNavigation<AppNavigatorProp<'TodoDetailScreen'>>();

  return (
    <Screen variant="scrolling" unsafe>
      <View>
        <Text fontWeight="black" fontSize="lg">
          Todo ID: {route.params.todoId}
        </Text>
        <Text>
          Many apps in life are built with lists, and sometimes you want more information about those lists. Detail
          views are a handy way to show descriptive data. Detail views make use of all of the screen real estate and
          will sometimes require a developer to hide things like tab bars. Place that screen in the{' '}
          <Text color="red.300" fontWeight="bold">
            AppNavigator
          </Text>{' '}
          and show that detail screen like a pro.
        </Text>
        <Button
          onPress={() => navigation.navigate('TodoModalScreen', { content: 'test content' })}
          variant="outline"
          colorScheme="green">
          Open Modal
        </Button>
      </View>
    </Screen>
  );
};
