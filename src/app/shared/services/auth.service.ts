import { Injectable } from '@angular/core';
import {UserModel} from "../domain/login.model";

@Injectable()
export class AuthService {

  constructor() {
  }

  checkStorage() {
    return window.localStorage.getItem('tm-login');
  }

  login (user: UserModel) {
    console.log("user logged -> " + user.username);
    window.localStorage.setItem('tm-login', 'true');
  }

  logout () {
    window.localStorage.removeItem('tm-login');
  }
}

