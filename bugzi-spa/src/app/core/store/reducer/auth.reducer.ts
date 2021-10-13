import { Action, createReducer, on, props } from '@ngrx/store';
import { AuthState, initialState } from '../store.state';

import { login, logout } from '../action/auth.action';

const _authReducer = createReducer(
  initialState,
  on(login, (state, action) => {
    return {
      authenticated: true,
      user: action.user
    };
  }),
  on(logout, (state, action) => {
    return {
      authenticated: false,
      user: ''
    };
  })
);

export function authReducer(state: AuthState = initialState, action: Action) {
  return _authReducer(state, action);
}
