/* eslint-disable global-require */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { config } from './src/config';
import { App } from './src/domains/core/App';

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
