/* eslint-disable global-require */

import PushNotificationIOS from "@react-native-community/push-notification-ios";
import React from 'react';
import { AppRegistry, Platform, UIManager } from 'react-native';
import PushNotification from "react-native-push-notification";
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import { config } from './src/config';
import { App } from './src/domains/core/App';

PushNotification.configure({
  onRegister (token) {
    console.log("TOKEN:", token);
  },

  onNotification (notification) {
    console.log("NOTIFICATION:", notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  onAction (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);
  },

  onRegistrationError(err) {
    if(err.code !== 3010) {
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


// This caused issues for us on Triforce, but it may not here
// https://github.com/facebook/react-native/issues/27552
if (Platform.OS === 'android' && UIManager?.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Performance improvements
enableScreens();

if (__DEV__ && config.whyDidYouRender) {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const ReactRedux = require('react-redux');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [[ReactRedux, 'useSelector']],
  });
}

AppRegistry.registerComponent(appName, () => App);
