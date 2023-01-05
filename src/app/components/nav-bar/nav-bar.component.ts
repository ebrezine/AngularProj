import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { elementAt, Subscription } from 'rxjs';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  constructor(
    private loginService: LoginRegisterService,
    public darkModeService: DarkModeService,
    //private loginRegisterComponent: LoginRegisterComponent,
    private router: Router
  ) {}

  loggedIn: boolean = false;
  Agent: boolean = false;
  subscription: Subscription = new Subscription();
  logoutResult: string = '';
  

  // TODO - destroy session
  logout() {
    this.loginService.isLoggedIn.next(false);
    this.loginService.isAgent.next(false);
    this.loginService.logoutUser().subscribe({
      next: () => {
        sessionStorage.clear()
        console.log("session storage empty?: "+String(sessionStorage.length == 0)+", the session and session object parameters have been cleared.");
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

    this.subscription = this.loginService.isAgent$.subscribe(
      (isAgent) => (this.Agent = isAgent)
    )
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
  

  darkModeToggle() {
    this.darkModeService.darkModeToggle();
  
    //this.darkModeService.sendClickEvent();
    
    
  }



  loginRedirect() {
    setTimeout(()=>{
      this.logoutResult = '';
      this.router.navigate(['login']);
    }, 1750);
  }
}
