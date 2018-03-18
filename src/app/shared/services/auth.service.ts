import { Injectable } from '@angular/core';
import {UserModel} from "../domain/login.model";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }

  checkStorage() {
    return window.localStorage.getItem('tm-login');
  }

  login (user: UserModel) {
    console.log("user logged -> " + user.username);
    window.localStorage.setItem('tm-login', 'true');
    this.router.navigate(['/products/list']);
  }

  logout () {
    window.localStorage.removeItem('tm-login');
  }
}

