import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePassword } from '../models/change-password';
import { FileClaim } from '../models/file-claim';

@Injectable({
  providedIn: 'root'
})
export class FileClaimService {

  url: string = `http://localhost:8083/`;


  constructor(private httpClient: HttpClient) {}

  fileClaim(claimInfo: FileClaim): Observable<Object> {
    return this.httpClient.post<Object>(this.url + 'createClaim', claimInfo);  
  }

}
