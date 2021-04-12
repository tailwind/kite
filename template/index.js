import { AppRegistry, Platform, UIManager } from 'react-native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import { App } from './src/domains/core/App';

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

AppRegistry.registerComponent(appName, () => App);
