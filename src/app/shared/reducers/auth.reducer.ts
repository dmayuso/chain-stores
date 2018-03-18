import {AuthState} from "./auth.state";
import {AUTH, AuthAction} from "../actions/auth.action";

export const initialState: AuthState = { authState: {} };

export function reducer(state = initialState, action: AuthAction): AuthState {
  switch(action.type) {
    case AUTH: {
      return {authState: action.payload};
    }
    default: {
      return state;
    }
  }
}
