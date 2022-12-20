import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit, OnDestroy {
  constructor(private loginService: LoginRegisterService) {}

  loggedIn: boolean = false;
  subscription: Subscription = new Subscription();

  logout() {
    this.loginService.isLoggedIn.next(false);
    this.loginService.logoutUser().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
    // TODO - logout service
  }

  ngOnInit() {
    this.subscription = this.loginService.isLoggedIn$.subscribe(
      (isLoggedIn) => (this.loggedIn = isLoggedIn)
    );
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
