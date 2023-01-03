import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { elementAt, Subscription } from 'rxjs';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { LoginRegisterComponent } from '../login-register/login-register.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  constructor(
    private loginService: LoginRegisterService,
    private router: Router
  ) {}

  loggedIn: boolean = false;
  subscription: Subscription = new Subscription();
  logoutResult: string = '';

 
  

  // TODO - destroy session
  logout() {
    this.loginService.isLoggedIn.next(false);
    this.loginService.logoutUser().subscribe({
      next: () => {
        this.logoutResult = "Log out successful!";

        setTimeout(()=>{
          this.logoutResult = "Log out successful!";
        }, 1750);
        
        this.loginRedirect();
      },
      error: (err) => {
        console.log('err', err);
        
      },
    });
  }

  ngOnInit() {
    this.subscription = this.loginService.isLoggedIn$.subscribe(
      (isLoggedIn) => (this.loggedIn = isLoggedIn)
    );
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  isDarkMode: boolean = false;
  darkModeToggle(){
    
    if(this.isDarkMode) {
      
    let element = document.getElementById("body2");
    this.isDarkMode = false;
    for(let single in element){
      element.className = "light-mode";
    }
    console.log(this.isDarkMode);
    
    
  }else{
  
    let element = document.getElementById("body2");
    this.isDarkMode = true;
    for(let single in element){
      element.className = "dark-mode";
    }
    
    console.log(this.isDarkMode);
  }

}



  loginRedirect() {
    setTimeout(()=>{
      this.logoutResult = '';
      this.router.navigate(['login']);
    }, 1750);
  }
}
