/* eslint-disable global-require */

jest.mock('../../node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native-gesture-handler', () =>
  require('react-native-gesture-handler/dist/src/__mocks__/RNGestureHandlerModule'),
);
