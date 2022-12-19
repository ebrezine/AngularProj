import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRegister } from '../models/login-register';

@Injectable({
  providedIn: 'root',
})
export class LoginRegisterService {
  url: string = `http://localhost:8083/`;

  constructor(private httpClient: HttpClient) {}

  loginUser(user: LoginRegister): Observable<unknown> {
    return this.httpClient.post<unknown>(this.url + 'login', user);
  }
}
