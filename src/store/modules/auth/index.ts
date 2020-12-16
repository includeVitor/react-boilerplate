import { Action } from 'redux';
import { IUser, IAuthState } from './types'

//Actions

const LOGIN = 'auth/login';
const LOGOUT = 'auth/logout';

type LoginAction = Action<typeof LOGIN>
type LogoutAction = Action<typeof LOGOUT>

export const login = (): LoginAction => ({
  type: LOGIN
})

export const logout = (): LogoutAction => ({
  type: LOGOUT
})

const initialState: IAuthState = {
    isAuthenticated: false,
    token: null,
    user: null
}


//Reduces

const authReducer = (
  state: IAuthState = initialState,
  action: LoginAction | LogoutAction
) => {
  switch (action.type) {
    
    case LOGIN:
      return { 
        ...state, 
        isAuthenticated: true 
      }

    case LOGOUT:
      return { 
        ...state, 
        isAuthenticated: false 
      }

    default:
      return state;
  }
};

export default authReducer
