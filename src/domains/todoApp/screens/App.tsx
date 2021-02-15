import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { SyncReduxTodoScreen } from 'src/domains/todoApp/screens/SyncReduxTodoScreen';
import { store } from 'src/state';

// This is temporary until navigation is in place
const App: FC = () => (
  <ReduxProvider store={store}>
    <SyncReduxTodoScreen />
  </ReduxProvider>
);

export default App;
