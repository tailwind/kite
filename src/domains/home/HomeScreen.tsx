import React, { FC } from 'react';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { useToast } from 'src/components/Toast/useToast';

export const HomeScreen: FC = () => {

  const { displayToast } = useToast();

  return (
    <Screen variant="centered">
      <Text
        style={{ alignSelf: 'center' }}
        fontWeight="black">
        Hello World
      </Text>
      <Button
        onPress={() => displayToast({
          message: 'This is a toast that is a lot longer just to show off how it can hold multiple lines!',
          duration: 10000
        })}
      >
        Show toast
      </Button>
    </Screen>
  );
};
