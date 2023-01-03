import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Claim} from 'src/app/models/claim';
import { LoginRegisterService } from 'src/app/services/login-register.service';

@Component({
selector:'app-claim',
templateUrl: './claim.component.html',
styleUrls: ['./claim.component.css'],
})

export class ClaimComponent{
    constructor(
        private httpClient: HttpClient
    ){}
    url: string = 'http://localhost:8083/';
    createClaim(claim: Claim){
        return this.httpClient.post<Claim>(this.url+'claims', claim);
        //if !(user.isWorker), allow field for OPTIONl claim description, then generate
    }
    displayTickets(){
        return this.httpClient.get<Array<Claim>>(this.url+'claims');
        //if(user)
        //if (user.isWorker), show all pending claims with button to approve or deny
        //else show all created claims, pending or not
    }
    setClaim(claim: Claim){
        return this.httpClient.put<Claim>(this.url, claim);
    }
}