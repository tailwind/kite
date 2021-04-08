/* eslint-disable global-require */

import React from 'react';
import { AppRegistry, Platform, UIManager } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import { config } from './src/config';
import { App } from './src/domains/core/App';
import { registerNotifications } from './src/services/notificationService/registerNotifications';

// Required to be outside of a component for notification handlers to work.
// See https://github.com/zo0r/react-native-push-notification#usage
registerNotifications();

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
