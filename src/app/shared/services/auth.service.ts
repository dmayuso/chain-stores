import { Injectable } from '@angular/core';
import {User} from "../domain/login.model";

@Injectable()
export class AuthService {

  constructor() {
  }

  checkStorage() {
    return window.localStorage.getItem('tm-login');
  }

  login (user: User) {
    console.log("user logged -> " + user.username);
    window.localStorage.setItem('tm-login', 'true');
  }

  logout () {
    window.localStorage.removeItem('tm-login');
  }
}

