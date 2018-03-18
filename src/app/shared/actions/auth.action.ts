import {Action} from "@ngrx/store";
import {UserModel} from "../domain/login.model";

export const AUTH = 'AUTH';

export class AuthAction implements Action {
  readonly type = AUTH;

  constructor(public payload: UserModel) {}
}
