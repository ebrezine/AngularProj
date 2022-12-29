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

  changePassword(passwords: ChangePassword): Observable<unknown> {
    return this.httpClient.post<unknown>(this.url + 'userprofile/resetpassword', passwords);
  }

}
