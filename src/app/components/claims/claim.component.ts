import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ClaimService } from 'src/app/services/claim.service';
import { Observable } from 'rxjs';
import { viewClaim } from 'src/app/models/view-claim';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
selector:'app-claim',
templateUrl: './claim.component.html',
styleUrls: ['./claim.component.css'],
})

export class ClaimComponent implements OnInit{
    constructor(
        private httpClient: HttpClient,
        private claimService: ClaimService,
        private darkModeService: DarkModeService,
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

        if(!this.darkModeService.isDarkMode) {
      
            let element = document.getElementById("divMain");
            let element2 = document.getElementById("divMain2");
            let element3 = document.getElementById("divMain3");
            let element4 = document.getElementById("divMain4");
            let element5 = document.getElementById("divMain5");
            let element6 = document.getElementById("divMain6");
            
            //this.darkModeService.isDarkMode = false;
        
            for(let single in element){
              element.className = "light-mode";
            }
            for(let single in element2){
              element2.className = "light-mode";
            }
            for(let single in element3){
              element3.className = "light-mode";
            }
            for(let single in element4){
              element4.className = "light-mode";
            }
            for(let single in element5){
              element5.className = "light-mode";
            }
            for(let single in element6){
              element6.className = "light-mode";
            }
            console.log(this.darkModeService.isDarkMode);
            
            
          }else{
          
            let element = document.getElementById("divMain");
            let element2 = document.getElementById("divMain2");
            let element3 = document.getElementById("divMain3");
            let element4 = document.getElementById("divMain4");
            let element5 = document.getElementById("divMain5");
            let element6 = document.getElementById("divMain6");
            //this.darkModeService.isDarkMode = true;
            
            for(let single in element){
              element.className = "dark-mode";
            }
            for(let single in element2){
              element2.className = "dark-mode";
            }
            for(let single in element3){
              element3.className = "dark-mode";
            }
            for(let single in element4){
              element4.className = "dark-mode";
            }
            for(let single in element5){
              element5.className = "dark-mode";
            }
            for(let single in element6){
              element6.className = "dark-mode";
            }
            
            console.log(this.darkModeService.isDarkMode);
          }

    }
    
    visibility = false;

    switchVisible(){
        this.visibility = !this.visibility;
    }
    

}
