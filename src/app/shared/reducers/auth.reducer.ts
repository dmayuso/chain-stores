import {AUTH, AuthAction} from "../actions/auth.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserModel} from "../domain/login.model";

export const initialState: UserModel = {  username: '', password: ''};

export function authReducer(state = initialState, action: AuthAction): UserModel {
  switch(action.type) {
    case AUTH: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export const getAuthState = createFeatureSelector<UserModel>('authState');

export const getAuthUser = createSelector(
  getAuthState,
  (state: UserModel) => state
);

