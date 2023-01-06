import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Approval } from "../models/approval";
import { viewClaim } from "../models/view-claim";
import {Claim} from "../models/claim"

@Injectable({
    providedIn: 'root',
})

export class ClaimService{
    url: string = 'http://localhost:8083/claims';

    constructor(private httpClient: HttpClient){}

    createClaim(claim: Claim): Observable<Claim>{
        return this.httpClient.post<Claim>(this.url, claim);
    }

    approveClaim(claim: Approval): Observable<Claim>{
        return this.httpClient.put<Claim>(this.url, claim);
    }

    getClaims():Observable<viewClaim[]>{
        return this.httpClient.get(this.url, {
          headers:{
            accept:"application/json"
          }
        }) as Observable<viewClaim[]>
      }
}