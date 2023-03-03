import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

const loginState = (state: RootState) => state.login;

const isLoggedIn = createSelector(loginState, state => state.loggedIn);
const getUser = createSelector(loginState, state => state.user);
const getUsername = createSelector(getUser, user => user?.username);
const getApikey = createSelector(getUser, user => user?.apikey);

export default {
  isLoggedIn,
  getUsername,
  getApikey,
} as const;
