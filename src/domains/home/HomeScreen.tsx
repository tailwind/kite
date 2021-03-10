import PushNotificationIOS from '@react-native-community/push-notification-ios';
import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from 'src/components/Button';
import { Screen } from 'src/components/Screen';
import { Text } from 'src/components/Text';
import { useToast } from 'src/components/Toast';
import { AppDispatch } from 'src/state';
import { logout } from 'src/state/authSlice';

const NotificationSection: FC = () => (
  <>
    <View style={{ marginBottom: 5 }}>
      <Text fontSize="md">Notifications</Text>
    </View>
    <View style={{
      width: 260,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Button
        size="sm"
        rounded="sm"
        onPress={() => PushNotificationIOS.addNotificationRequest({
          title: 'Demo notification',
          body: '0 second delay',
          id: '0s-delay'
        })}
      >
        0s Delay
      </Button>
      <Button
        size="sm"
        rounded="sm"
        onPress={() => PushNotificationIOS.addNotificationRequest({
          title: 'Demo notification',
          body: '3 second delay',
          id: '3s-delay',
          fireDate: new Date(Date.now() + 3000)
        })}
      >
        3s Delay
      </Button>
      <Button
        size="sm"
        rounded="sm"
        onPress={() => PushNotificationIOS.addNotificationRequest({
          title: 'Demo notification',
          body: '5 second delay',
          id: '5s-delay',
          fireDate: new Date(Date.now() + 5000)
        })}
      >
        5s Delay
      </Button>
    </View>
  </>
);

export const HomeScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { displayToast } = useToast();
  const onPressLogout = useCallback(async () => {
    await dispatch(logout());
    displayToast({
      message: "Successfully logged out",
      duration: 3000
    });
  }, [dispatch, displayToast]);

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
      <NotificationSection />
    </Screen>
  );
};
