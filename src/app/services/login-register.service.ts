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

  isAgent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAgent$: Observable<boolean> = this.isAgent.asObservable();

  constructor(private httpClient: HttpClient) {}

  loginUser(user: LoginRegister): Observable<LoginRegister> {
    return this.httpClient.post<LoginRegister>(this.url + 'login', user);
    
    //.pipe(
      //  tap(response => console.log(response)),
        //map(response => response.body)
    //);
  
  }

  registerUser(user: LoginRegister): Observable<unknown> {
    return this.httpClient.post<unknown>(this.url + 'register', user);
  }

  logoutUser(): Observable<unknown> {
    return this.httpClient.get<unknown>(this.url + 'logout');
  }
}
