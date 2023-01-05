import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileClaim } from 'src/app/models/file-claim';
import { FileClaimService } from 'src/app/services/file-claim.service';

@Component({
  selector: 'app-file-claim',
  templateUrl: './file-claim.component.html',
  styleUrls: ['./file-claim.component.css']
})
export class FileClaimComponent {
  constructor(
    private fileClaimService: FileClaimService,
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
  }

fileClaim() {
  if (!this.amount || !this.description) {
    this.fileClaimResult = 'Please fill in all of the fields.';
    return;
  }

  let claimInfo: FileClaim = new FileClaim(
    this.user_id,
    this.amount,
    this.description
  );

  //call your change password service now
  // you probable need the username to be saved in session
    //before your backend can run

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
