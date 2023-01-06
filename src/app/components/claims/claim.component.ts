import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ClaimService } from 'src/app/services/claim.service';
import { Observable } from 'rxjs';
import { viewClaim } from 'src/app/models/view-claim';

@Component({
selector:'app-claim',
templateUrl: './claim.component.html',
styleUrls: ['./claim.component.css'],
})

export class ClaimComponent implements OnInit{
    constructor(
        private httpClient: HttpClient,
        private claimService: ClaimService,
        private route: ActivatedRoute,
        private router: Router
    ){}
    url = 'localhost:8083/claims';
    claims: viewClaim[]=[]
    getItems(): Observable<any[]>{
        return this.httpClient.get<any[]>(this.url);
    }
    ngOnInit(): void {
        this.claimService.getClaims().subscribe({
            next:(data:viewClaim[]) => {this.claims=data;
            for(let item in this.claims){
                console.log(item);
            }},
            error:(error)=>{
                console.log("request failed: "+error);
            }
        });
    }
    
    visibility = false;

    switchVisible(){
        this.visibility = !this.visibility;
    }
    

}
