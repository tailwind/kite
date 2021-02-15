import { Action, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit';
import { todoReducer } from 'src/state/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store['getState']>;

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>;
