import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoginRegister } from 'src/app/models/login-register';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  constructor(
    private loginRegisterService: LoginRegisterService,
    private route: ActivatedRoute
  ) {}

  loginUsername = '';
  loginPassword = '';
  registerUsername = '';
  registerPassword = '';
  registerIsWorker = false;

  loginResult: string = '';
  registerResult: string = '';

  name: string = '';
  activeClass: string = 'tab-pane fade show active';
  inactiveClass: string = 'tab-pane fade';

  ngOnInit(): void {
    this.route.url.subscribe((params) => {
      this.name = params[0].path;
    });
  }

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
      next: (usr) => {
        this.loginUsername = '';
        this.loginPassword = '';
        this.loginRegisterService.isLoggedIn.next(true);
        this.loginResult = 'You successfully logged in';
        console.log(usr);
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
      this.registerPassword,
      this.registerIsWorker
    );

    this.loginRegisterService.registerUser(user).subscribe({
      next: () => {
        this.registerUsername = '';
        this.registerPassword = '';
        this.registerIsWorker = false;
        this.loginRegisterService.isLoggedIn.next(true);
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
