import { Action } from 'redux';
import { RootState } from './store';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null
}

const LOGIN = 'auth/login';
const LOGOUT = 'auth/logout';

type LoginAction = Action<typeof LOGIN>;
type LogoutAction = Action<typeof LOGOUT>;

export const login = (): LoginAction => ({
  type: LOGIN
});

export const logout = (): LogoutAction => ({
  type: LOGOUT
});

// export const selectRecorderState = (rootState: RootState) => rootState.recorder;
// export const selectDateStart = (rootState: RootState) =>
//   selectRecorderState(rootState).dateStart;

const initialState: AuthState = {
    isAuthenticated: false,
    token: null
};

const authReducer = (
  state: AuthState = initialState,
  action: LoginAction | LogoutAction
) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, dateStart: new Date().toISOString() };

    case LOGOUT:
      return { ...state, dateStart: '' };

    default:
      return state;
  }
};

export default authReducer;
