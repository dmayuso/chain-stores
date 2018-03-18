import {ActionReducerMap} from "@ngrx/store";
import {AuthState} from "./auth.state";
import * as authReducer from './auth.reducer';
import {AuthAction} from "../actions/auth.action";

export const reducers: ActionReducerMap<AuthState, AuthAction> = {
  authState:authReducer.authReducer
};
