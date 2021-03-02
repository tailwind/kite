/* eslint-disable global-require */

import React from 'react';
import { AppRegistry, Platform, UIManager } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import { config } from './src/config';
import { App } from './src/domains/core/App';

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
