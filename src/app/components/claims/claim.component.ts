import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {Claim} from 'src/app/models/claim';
import { ClaimService } from 'src/app/services/claim.service';
import { Observable } from 'rxjs';

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
    items: any[] = [];
    getItems(): Observable<any[]>{
        return this.httpClient.get<any[]>(this.url);
    }
    ngOnInit(): void {
        this.getItems().subscribe((res: any[]) => {
            this.items = res;
        })
    }
    
    

}
