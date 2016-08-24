import { Component } from '@angular/core';

import { LoginComponent } from './login/login.component';

@Component({
  selector: 'my-app',
  template: `<h1 class="head">My First App</h1>
    <app-login></app-login>   
    <router-outlet></router-outlet>
  `,
  directives: [LoginComponent]
})
export class AppComponent { }