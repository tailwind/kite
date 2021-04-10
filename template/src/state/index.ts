import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@rtk-incubator/rtk-query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { pokemonApi } from 'src/services/pokemonApi';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store['getState']>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
