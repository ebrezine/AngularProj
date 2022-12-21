import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRegister } from '../models/login-register';

@Injectable({
  providedIn: 'root',
})
export class LoginRegisterService {
  url: string = `http://localhost:8083/`;

  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedIn.asObservable();

  constructor(private httpClient: HttpClient) {}

  options = { withCredentials: true };

  loginUser(user: LoginRegister): Observable<unknown> {
    return this.httpClient.post<unknown>(
      this.url + 'login',
      user,
      this.options
    );
  }

  registerUser(user: LoginRegister): Observable<unknown> {
    return this.httpClient.post<unknown>(
      this.url + 'register',
      user,
      this.options
    );
  }

  logoutUser(): Observable<unknown> {
    return this.httpClient.get<unknown>(this.url + 'logout', this.options);
  }
}
