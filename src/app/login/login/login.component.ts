import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {User} from "../../shared/domain/login.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

const ENTER_KEY_CODE = 13;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder){
    this.buildForm();
    this.user = new User();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.email, this.customValidator],
      password: ['', Validators.minLength(8)]
    })
  }

  customValidator(formControl: FormControl) {
    return null;
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
