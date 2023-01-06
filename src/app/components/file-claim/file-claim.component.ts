import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileClaim } from 'src/app/models/file-claim';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { FileClaimService } from 'src/app/services/file-claim.service';

@Component({
  selector: 'app-file-claim',
  templateUrl: './file-claim.component.html',
  styleUrls: ['./file-claim.component.css']
})
export class FileClaimComponent {
  constructor(
    private fileClaimService: FileClaimService,
    private darkModeService: DarkModeService,
    private route: ActivatedRoute

  ){}
  
  user_id = sessionStorage.getItem("loggedInUser") + '';
  amount = 0;
  description = '';

  fileClaimResult: string = '';

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

fileClaim() {
  if (!this.amount || this.amount == 0 || !this.description) {
    this.fileClaimResult = 'Please fill in all of the fields.';
    return;
  }

  let claimInfo: FileClaim = new FileClaim(
    this.user_id,
    this.amount,
    this.description
  );

  

    this.fileClaimService.fileClaim(claimInfo).subscribe({
      next: (clInfo) => {
          this.amount = 0;
          this.description = '';
          this.fileClaimResult = 'Claim submission successful';
      },
      error: (err) => {
        this.fileClaimResult = err.error;
        console.log(err);
      },


    });




}

}
