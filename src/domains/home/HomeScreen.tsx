import React, { FC } from 'react';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { useToast } from 'src/components/Toast/useToast';

export const HomeScreen: FC = () => {

  const { addToast } = useToast();

  return (
    <Screen variant="centered">
      <Text
        style={{ alignSelf: 'center' }}
        fontWeight="black">
        Hello World
      </Text>
      <Button
        onPress={() => addToast({
          message: 'This is a toast',
          duration: 5000
        })}
      >
        Show toast
      </Button>
    </Screen>
  );
};
