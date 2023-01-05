import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoginRegister } from 'src/app/models/login-register';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css'],
})
export class LoginRegisterComponent implements OnInit {
  //clickEventsubscription:Subscription;
  
  
  constructor(
    private loginRegisterService: LoginRegisterService,
    private darkModeService: DarkModeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.clickEventsubscription=this.darkModeService.getClickEvent().subscribe(()=>{
    //   this.darkModeToggle();
    // })
  }

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
      this.loginResult = 'Please enter your password';
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
        console.log(usr.username);
        console.log(usr.worker);
        console.log(String(usr.worker));
        sessionStorage.setItem("loggedInUser", usr.username);
        sessionStorage.setItem("isWorker", String(usr.worker));
        
        if(sessionStorage.getItem("isWorker")=="true"){
          this.loginRegisterService.isAgent.next(true);
        }else{
          this.loginRegisterService.isAgent.next(false);
        }
        
        console.log(sessionStorage.getItem("loggedInUser"));
        console.log(sessionStorage.getItem("isWorker"));
        console.log("session storage length: "+sessionStorage.length +" object parameters have been stored in the session.");
        
        setTimeout(()=>{
          this.loginResult = 'redirecting...';
          this.claimsRedirect();
          }, 1750);
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
        //this.loginRegisterService.isLoggedIn.next(true);
        this.registerResult = 'You successfully registered';

        setTimeout(()=>{
          this.registerResult = 'redirecting to login page';
          this.loginRedirect();
          }, 1750);
       
      },
      error: (err) => {
        this.registerResult = 'There was an error registering';
        console.log(err);
      },
    });
  }
  

  claimsRedirect() {
    setTimeout(()=>{
      this.router.navigate(['userprofile']);
    }, 1750);
  }

  loginRedirect() {
    setTimeout(()=>{
      this.router.navigate(['login']);
    }, 1750);
  }

}

