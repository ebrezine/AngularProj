import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRegister } from '../models/login-register';

@Injectable({
  providedIn: 'root',
})
export class LoginRegisterService {
  url: string = `http://localhost:8083/`;

  loggedIn = false;
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    this.loggedIn
  );
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();

  constructor(private httpClient: HttpClient) {}

  loginUser(user: LoginRegister): Observable<unknown> {
    return this.httpClient.post<unknown>(this.url + 'login', user);
  }

  registerUser(user: LoginRegister): Observable<unknown> {
    return this.httpClient.post<unknown>(this.url + 'register', user);
  }
}
