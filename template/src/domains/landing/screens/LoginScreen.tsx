import React, { FC, useCallback } from 'react';
import { Alert, View } from 'react-native';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { LoginForm } from 'src/domains/landing/components/LoginForm';

const HEADER_CONTAINER_STYLE = {
  marginVertical: '25%',
};

const HEADER_STYLE = {
  marginBottom: 4,
};

export const LoginScreen: FC = () => {
  const onPressDontHaveAccount = useCallback(() => {
    Alert.alert(
      'Private Beta',
      'This app is currently in a private beta and not accepting new signups, please try again later.',
      [{ text: 'OK' }],
      { cancelable: false },
    );
  }, []);

  return (
    <Screen variant="scrolling" padding="lg">
      <View style={HEADER_CONTAINER_STYLE}>
        <Text textStyle={HEADER_STYLE} fontSize="xl" fontWeight="black" color="purple.600">
          Welcome
        </Text>
        <Text fontSize="lg" fontWeight="bold">
          Sign in to continue
        </Text>
      </View>
      <LoginForm />
      <Button onPress={onPressDontHaveAccount} variant="ghost" size="sm" colorScheme="gray.800">
        Don&apos;t have an account?
      </Button>
    </Screen>
  );
};
