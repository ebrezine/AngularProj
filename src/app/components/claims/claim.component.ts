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
    description = '';
    amount = 0;
    createResult: string = '';
    approveResult: string = '';
    url = "localhost:8083/claim";
 
    createClaim(){
        if(!this.description && this.amount==0){
            this.createResult = 'Please enter an amount and a description';
            return;
        }
        else if(!this.description){
            this.createResult = 'Please enter a description for your claim';
        }
        else if(this.amount == 0){
            this.createResult = 'Please enter an amount for your claim';
        }

        let claim: Claim = new Claim(
            this.description,
            this.amount
        );

        this.claimService.createClaim(claim).subscribe({
            next: (clm) => {
                this.description = '';
                this.amount = 0;

            },
            error: (err) =>{
                this.createResult = err.error;
                console.log(err);
            },
        });

        //if !(user.isWorker), allow field for OPTIONl claim description, then generate
    }
    async displayTickets(){
        let response = await fetch(this.url);
        if(response.status===200){
            let claims = await response.json();
            this.populateTable(claims);
        }
    }
    async populateTable(claims){
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
                td.innerHTML = 
                claimBody.appendChild(row);
            }
        }
        
    }

}
