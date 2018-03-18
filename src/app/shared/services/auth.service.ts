import { Injectable } from '@angular/core';
import {UserModel} from "../domain/login.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthState} from "../reducers/auth.state";
import {AuthAction} from "../actions/auth.action";

@Injectable()
export class AuthService {

  constructor(private router: Router,
              private authStore: Store<AuthState>) {
  }

  checkStorage() {
    return window.localStorage.getItem('tm-login');
  }

  login (user: UserModel) {
    console.log("user logged -> " + user.username);
    window.localStorage.setItem('tm-login', 'true');
    this.authStore.dispatch(new AuthAction(user));
    this.router.navigate(['/products/list']);
  }

  logout () {
    window.localStorage.removeItem('tm-login');
    window.location.reload();
  }
}

