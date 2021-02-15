import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src/domains/core/App';

AppRegistry.registerComponent(appName, () => App);
