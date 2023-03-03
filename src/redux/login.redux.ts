import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import type { RootState } from './store';
import userapiService from '../service/userapi.service';
import { NavigateFunction, NavigateProps } from 'react-router-dom';
import axios, { AxiosError } from 'axios';


export interface LoginState {
  loggedIn: boolean;

  user?: {
    id: number,
    apikey: string,
    username: string
  };
}

const initialState: LoginState = {
  loggedIn: false,
  user: undefined,
};


const login = createAsyncThunk('login/login', async () => {
  window.location.href = '/auth/login';
  return;
});
const logout = createAction('login/logout');


const checkLoginOrLogin = createAsyncThunk('login/check', async (navigate: NavigateFunction) => {
  try {
    const userResponse = await userapiService.getUserInfo();
    console.log('got userResponse', userResponse);

    return await userResponse.data;
  } catch (e: unknown | AxiosError) {
    navigate('/login');
  }

});

export const loginReducer = createReducer(initialState, builder => {
  builder
    // .addCase(login, (state, action) => {
    //     state.loggedIn = true;
    //     state.token = action.payload.token;
    //     state.username = action.payload.username;
    // })
    .addCase(checkLoginOrLogin.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = {
          username: action.payload.username,
          id: action.payload.id,
          apikey: action.payload.apikey,
        };
        state.loggedIn = true;
      }
    })
    .addCase(logout, (state, action) => {
      console.log('logout reduce');
      state = {
        ...initialState,
      };
      return state;
    });
});


export default { login, logout, checkLoginOrLogin } as const;