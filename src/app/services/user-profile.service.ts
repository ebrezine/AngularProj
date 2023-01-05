import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePassword } from '../models/change-password';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  url: string = `http://localhost:8083/`;


  constructor(private httpClient: HttpClient) {}

  changePassword(passwords: ChangePassword): Observable<Object> {
    return this.httpClient.post<Object>(this.url + 'userprofile/resetpassword', passwords);  
  }

  changeRole(pin: number): Observable<Object> {
<<<<<<< HEAD
    return this.httpClient.post<Object>(this.url+'/change', pin);
=======

    return this.httpClient.post<Object>(this.url+'change', pin);

>>>>>>> frontEndWork1
  }

}


