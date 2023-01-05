import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {Claim} from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';

@Component({
selector:'app-claim',
templateUrl: './claim.component.html',
styleUrls: ['./claim.component.css'],
})

export class ClaimComponent{
    constructor(
        private httpClient: HttpClient,
        private claimService: ClaimService,
        private route: ActivatedRoute,
        private router: Router
    ){}
    url = 'localhost:8083/claims';
    async displayTickets(){
        let response = await fetch(this.url);
        if(response.status===200){
            let claims = await response.json();
            this.populateTable(claims);
        }
    }
    async populateTable(claims: any){
        const claimBody = document.getElementById("claimBody");
        if(claimBody != null){
            claimBody.innerHTML = "";
            for(let claim of claims){
                let row = document.createElement("tr");
                for(let field in claim){
                    let td = document.createElement("td");
                    td.innerText=claim[field];
                    row.appendChild(td);
                }
                let td = document.createElement("td");
                claimBody.appendChild(row);
            }
        }
        
    }

}
