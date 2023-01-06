import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { viewClaim } from "../models/view-claim";

@Injectable({
    providedIn: 'root',
})

export class ClaimService{
    url: string = 'http://localhost:8083/claims';

    constructor(private httpClient: HttpClient){}


    getClaims():Observable<viewClaim[]>{
        return this.httpClient.get(this.url, {
          headers:{
            accept:"application/json"
          }
        }) as Observable<viewClaim[]>
      }
}