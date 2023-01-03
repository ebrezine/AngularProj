import { TitleStrategy } from "@angular/router";

export class ClaimService{
    url: string = 'http://localhost:8083/';

    constructor(){}

    createClaim(sessionStorage.get("loggedInUser")){
        return this.httpClient.post<claim>(this.url+'')
    }
}