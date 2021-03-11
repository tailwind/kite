import PushNotification, {
  PushNotificationObject,
  PushNotificationScheduleObject,
} from 'react-native-push-notification';

type Notification = PushNotificationObject | PushNotificationScheduleObject;

export const sendNotification = (notification: Notification) => {
  // Workaround to decide if notification needs to be scheduled
  if ((notification as PushNotificationScheduleObject).date) {
    PushNotification.localNotificationSchedule(notification as PushNotificationScheduleObject);
  } else {
    PushNotification.localNotification(notification);
  }
};
