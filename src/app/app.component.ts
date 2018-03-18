import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   private title: string = 'Products shop';

   constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}
