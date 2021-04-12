import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@rtk-incubator/rtk-query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { config } from 'src/services/config';
import { pokemonApi } from 'src/services/pokemonApi';
import { authReducer } from 'src/state/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: config.dev.serializableCheck,
      immutableCheck: config.dev.immutableCheck,
    }).concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store['getState']>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
