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
  
  
  
  constructor(
    private loginRegisterService: LoginRegisterService,
    private darkModeService: DarkModeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
   
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

    if(!this.darkModeService.isDarkMode) {
      
      let element = document.getElementById("divMain");
      let element2 = document.getElementById("divMain2");
      let element3 = document.getElementById("divMain3");
      let element4 = document.getElementById("divMain4");
      let element5 = document.getElementById("divMain5");
      let element6 = document.getElementById("divMain6");
      
      
  
      for(let single in element){
        element.className = "light-mode";
      }
      for(let single in element2){
        element2.className = "light-mode";
      }
      for(let single in element3){
        element3.className = "light-mode";
      }
      for(let single in element4){
        element4.className = "light-mode";
      }
      for(let single in element5){
        element5.className = "light-mode";
      }
      for(let single in element6){
        element6.className = "light-mode";
      }
      console.log(this.darkModeService.isDarkMode);
      
      
    }else{
    
      let element = document.getElementById("divMain");
      let element2 = document.getElementById("divMain2");
      let element3 = document.getElementById("divMain3");
      let element4 = document.getElementById("divMain4");
      let element5 = document.getElementById("divMain5");
      let element6 = document.getElementById("divMain6");
      
      
      for(let single in element){
        element.className = "dark-mode";
      }
      for(let single in element2){
        element2.className = "dark-mode";
      }
      for(let single in element3){
        element3.className = "dark-mode";
      }
      for(let single in element4){
        element4.className = "dark-mode";
      }
      for(let single in element5){
        element5.className = "dark-mode";
      }
      for(let single in element6){
        element6.className = "dark-mode";
      }
      
      console.log(this.darkModeService.isDarkMode);
    }

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

        this.loginRegisterService.userEmail = sessionStorage.getItem("loggedInUser")+'';

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
        
        this.registerResult = 'You successfully registered';

        setTimeout(()=>{
          this.registerResult = 'redirecting to login page';
          this.loginRedirect();
          }, 1750);
       
      },
      error: (err) => {
        this.registerResult = err.error.substring(20);
        console.log(err);
      },
    });
  }
  

  claimsRedirect() {
    setTimeout(()=>{
      this.router.navigate(['viewclaim']);
    }, 1750);
  }

  loginRedirect() {
    setTimeout(()=>{
      this.router.navigate(['login']);
    }, 1750);
  }

}

