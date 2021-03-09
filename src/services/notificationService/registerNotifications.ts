import { Notifications, Registered, RegistrationError } from 'react-native-notifications';

export const registerNotifications = () => {
  Notifications.registerRemoteNotifications();
  Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
    console.log(`Device token received: ${event.deviceToken}`);
  });
  Notifications.events().registerRemoteNotificationsRegistrationFailed((event: RegistrationError) => {
    console.error(event);
  });
}
