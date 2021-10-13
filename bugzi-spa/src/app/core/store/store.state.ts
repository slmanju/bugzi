export interface AuthState {
  authenticated: boolean,
  user: string
}

export interface AppState {
  auth: AuthState
}

export const initialState: AuthState = {
  authenticated: false,
  user: ''
};