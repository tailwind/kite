import React from 'react';
import { AppRegistry, Platform, UIManager } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import { App } from './src/domains/core/App';
import { config } from './src/services/config';

/**
 * Free performance optimization
 *
 * https://reactnavigation.org/docs/react-native-screens
 */
enableScreens();

// Free layout animations
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

if (config.dev.whyDidYouRender) {
  // eslint-disable-next-line global-require,import/no-extraneous-dependencies
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  // eslint-disable-next-line global-require
  const ReactRedux = require('react-redux');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [[ReactRedux, 'useSelector']],
  });
}

AppRegistry.registerComponent(appName, () => App);
