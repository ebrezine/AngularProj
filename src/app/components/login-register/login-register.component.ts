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

  loginUsername = '';
  loginPassword = '';
  registerUsername = '';
  registerPassword = '';

  loginResult: string = '';
  registerResult: string = '';

  login() {
    if (!this.loginUsername && !this.loginPassword) {
      this.loginResult = 'Please enter your username and password';
      return;
    }
    if (!this.loginUsername) {
      this.loginResult = 'Please enter your username';
      return;
    }
    if (!this.loginPassword) {
      this.loginResult = 'Please enter you password';
      return;
    }

    let user: LoginRegister = new LoginRegister(
      this.loginUsername,
      this.loginPassword
    );

    this.loginRegisterService.loginUser(user).subscribe({
      next: () => {
        this.loginResult = 'You successfully logged in';
        // TODO - redirect user
        // TODO - create user in session
      },
      error: (err) => {
        this.loginResult = err.error;
        console.log(err);
      },
    });
  }

  register() {
    if (!this.registerUsername && !this.registerPassword) {
      this.registerResult = 'Please enter your username and password';
      return;
    }
    if (!this.registerUsername) {
      this.registerResult = 'Please enter your username';
      return;
    }
    if (!this.registerPassword) {
      this.registerResult = 'Please enter you password';
      return;
    }

    let user: LoginRegister = new LoginRegister(
      this.registerUsername,
      this.registerPassword
    );

    this.loginRegisterService.registerUser(user).subscribe({
      next: () => {
        this.registerResult = 'You successfully registered';
        // TODO - login user
        // TODO - redirect user
        // TODO - create user in session
      },
      error: (err) => {
        this.registerResult = 'There was an error registering';
        console.log(err);
      },
    });
  }
}
