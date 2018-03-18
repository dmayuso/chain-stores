import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/domain/login.model";

const ENTER_KEY_CODE = 13;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;

  constructor(private authService: AuthService){
    this.user = new User();
  }

  ngOnInit() {
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let x = event.keyCode;
    if (x === ENTER_KEY_CODE) {
      this.doLogin();
    }
  }

  doLogin() {
    this.authService.login(this.user.model);
  }

}
