import { Component, OnInit } from '@angular/core';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private loginService: LoginRegisterService) {}

  loggedIn: boolean = false;

  ngOnInit() {
    this.loginService.isLoggedIn$.subscribe(
      (isLoggedIn) => (this.loggedIn = isLoggedIn)
    );
  }
}
