jest.mock('../../node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
jest.mock('react-native-gesture-handler', () =>
  require('react-native-gesture-handler/dist/src/__mocks__/RNGestureHandlerModule'),
);
