/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as exampleService from 'src/services/exampleService';
import { User } from 'src/services/exampleService';

export const refreshAuth = createAsyncThunk<User>('auth/refreshAuth', async () => {
  const user = await exampleService.getAuthenticated();

  if (!user) {
    throw new Error('Not authenticated');
  }

  return user;
});

export const login = createAsyncThunk<User, { email: string; password: string }>('auth/login', async payload => {
  const user = await exampleService.login(payload);

  return user;
});

export const logout = createAsyncThunk<void>('auth/logout', async () => {
  await exampleService.logout();
});

export enum AuthState {
  Authorized = 'Authorized',
  Unauthorized = 'Unauthorized',
  Pending = 'Pending',
}

export type AuthSliceState = {
  authState: AuthState;
  user: User | null;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authState: AuthState.Pending,
    user: null,
  } as AuthSliceState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(refreshAuth.fulfilled, (state, { payload }) => {
      state.authState = AuthState.Authorized;
      state.user = payload;
    });
    builder.addCase(refreshAuth.rejected, state => {
      state.authState = AuthState.Unauthorized;
      state.user = null;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.authState = AuthState.Authorized;
      state.user = payload;
    });
    builder.addCase(logout.fulfilled, state => {
      state.authState = AuthState.Unauthorized;
      state.user = null;
    });
  },
});

export const {} = authSlice.actions;

export const authReducer = authSlice.reducer;
