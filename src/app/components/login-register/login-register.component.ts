import { Component } from '@angular/core';
import { LoginRegister } from 'src/app/models/login-register';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent {
  constructor(private loginRegisterService: LoginRegisterService) {}

  username = '';
  password = '';

  loginRegisterResult: string = '';

  login() {
    if (!this.username && !this.password) {
      this.loginRegisterResult = 'Please enter your username and password';
      return;
    }
    if (!this.username) {
      this.loginRegisterResult = 'Please enter your username';
      return;
    }
    if (!this.password) {
      this.loginRegisterResult = 'Please enter you password';
      return;
    }

    let user: LoginRegister = new LoginRegister(this.username, this.password);

    this.loginRegisterService.loginUser(user).subscribe({
      next: () => {
        this.loginRegisterResult = 'You successfully logged in';
      },
      error: (err) => {
        this.loginRegisterResult = err.error;
        console.log(err);
      },
    });
  }
}
