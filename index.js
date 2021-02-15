/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { config } from './src/config';
import { App } from './src/domains/core/App';

// eslint-disable-next-line no-undef
if (__DEV__ && config.whyDidYouRender) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const ReactRedux = require('react-redux');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    trackExtraHooks: [[ReactRedux, 'useSelector']],
  });
}

AppRegistry.registerComponent(appName, () => App);
