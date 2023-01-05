import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcessClaim } from 'src/app/models/process-claim';
import { ProcessClaimService } from 'src/app/services/process-claim.service';

@Component({
  selector: 'app-process-claim',
  templateUrl: './process-claim.component.html',
  styleUrls: ['./process-claim.component.css']
})
export class ProcessClaimComponent {


  constructor(
    private processClaimService: ProcessClaimService,
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
