import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

export const registerNotifications = () => {
  // Registering local notifications
  PushNotification.configure({
    onRegister(token) {
      console.log('TOKEN:', token);
    },

    onNotification(notification) {
      console.log('NOTIFICATION:', notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    onAction(notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);
    },

    onRegistrationError(err) {
      if (err.code !== 3010) {
        console.error(err.message, err);
      }
    },

    // IOS ONLY
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  });
};
