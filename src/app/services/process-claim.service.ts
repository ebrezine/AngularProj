import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProcessClaim } from '../models/process-claim';

@Injectable({
  providedIn: 'root'
})
export class ProcessClaimService {

  url: string = `http://localhost:8083/`;


  constructor(private httpClient: HttpClient) {}

  processClaim(proClaim: ProcessClaim): Observable<Object> {
    return this.httpClient.post<Object>(this.url + 'processClaim', proClaim);  
  }



}
