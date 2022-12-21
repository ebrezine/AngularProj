import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginRegisterService } from 'src/app/services/login-register.service';

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

  // TODO - destroy session
  logout() {
    this.loginService.isLoggedIn.next(false);
    this.loginService.logoutUser().subscribe({
      next: () => {
        this.router.navigate(['/']);
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
}
