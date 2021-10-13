import { createSelector } from '@ngrx/store';
import { AppState, AuthState } from '../store.state';

export const selectAuth = (state: AppState) => state.auth;

export const selectAuthenticated = createSelector(selectAuth, (auth: AuthState) => auth.authenticated);
