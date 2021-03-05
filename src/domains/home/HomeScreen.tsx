import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { AppDispatch } from 'src/state';
import { logout } from 'src/state/authSlice';

export const HomeScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const onPressLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <Screen variant="scrolling" padding="lg">
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text fontWeight="bold" color="gray.700" fontSize="xl">
          Home
        </Text>
        <View style={{ flex: 1 }} />
        <Button onPress={onPressLogout} size="sm" colorScheme="red" rounded="sm">
          Log Out
        </Button>
      </View>
    </Screen>
  );
};
