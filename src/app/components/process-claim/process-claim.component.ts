import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcessClaim } from 'src/app/models/process-claim';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { ProcessClaimService } from 'src/app/services/process-claim.service';

@Component({
  selector: 'app-process-claim',
  templateUrl: './process-claim.component.html',
  styleUrls: ['./process-claim.component.css']
})
export class ProcessClaimComponent {


  constructor(
    private processClaimService: ProcessClaimService,
    private darkModeService: DarkModeService,
    private route: ActivatedRoute

  ){}

  //changePasswordUsername = sessionStorage.getItem("loggedInUser") + '';
  id = 0;
  status = '';
    
  processClaimResult: string = '';

  name: string = '';
  activeClass: string = 'tab-pane fade show active';
  inactiveClass: string = 'tab-pane fade';

  ngOnInit(): void {
    this.route.url.subscribe((params) => {
      this.name = params[0].path;
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

processClaim() {
  if (!this.id || !this.status) {
    this.processClaimResult = 'Please fill in all of the fields.';
    return;
  }

  let proClaim: ProcessClaim = new ProcessClaim(
    this.id,
    this.status,
  );

  //call your change password service now
  // you probable need the username to be saved in session
    //before your backend can run

    this.processClaimService.processClaim(proClaim).subscribe({
      next: (prCl) => {
          this.id = 0;
          this.status = '';
          this.processClaimResult = 'Claim processed successfully';
          console.log(this.status);
      },
      error: (err) => {
        this.processClaimResult = err.error;
        console.log(err);
      },


    });




}



}
