import React, { FC, useContext } from 'react';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { ToastContext } from 'src/components/Toast/toastContext';

export const HomeScreen: FC = () => {

  const { displayToast } = useContext(ToastContext);

  return (
    <Screen variant="centered">
      <Text
        style={{ alignSelf: 'center' }}
        fontWeight="black">
        Hello World
      </Text>
      <Button
        onPress={() => displayToast({
          message: 'This is a toast',
          duration: 5000
        })}
      >
        Show toast
      </Button>
    </Screen>
  );
};
