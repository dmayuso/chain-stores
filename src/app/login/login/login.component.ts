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

  user: User;
  userNameValue: string;
  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder){
    this.user = new User();
    this.buildForm();
  }


  buildForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.email, this.customValidator],
      password: ['', Validators.minLength(8)]
    });

    this.loginForm.get('username').valueChanges
      .subscribe(data => this.userNameValue = data);
  }

  customValidator(formControl: FormControl) {
    return null;
  }

  hasErrors(form: FormGroup, field: string) {
    return (!form.get(field).valid && form.get(field).touched);
  }

  validate() {
    if(this.loginForm.valid) {
      console.log('valid -> ' + this.userNameValue);
    }
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
    this.validate();
    this.authService.login(this.user.model);
  }

}
