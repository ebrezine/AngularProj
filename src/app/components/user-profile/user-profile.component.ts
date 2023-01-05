import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangePassword } from 'src/app/models/change-password';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(
    private userProfileService: UserProfileService,
    private route: ActivatedRoute

  ){}

  changePasswordUsername = sessionStorage.getItem("loggedInUser") + '';
  changePasswordPassword = '';
  changePasswordNewPassword = '';

  changePasswordResult: string = '';

  name: string = '';
  activeClass: string = 'tab-pane fade show active';
  inactiveClass: string = 'tab-pane fade';

  ngOnInit(): void {
    this.route.url.subscribe((params) => {
      this.name = params[0].path;
    });
  }

changePassword() {
  if (!this.changePasswordUsername || !this.changePasswordPassword || !this.changePasswordNewPassword) {
    this.changePasswordResult = 'Please fill in all of the fields.';
    return;
  }

  let passwords: ChangePassword = new ChangePassword(
    this.changePasswordUsername,
    this.changePasswordPassword,
    this.changePasswordNewPassword
  );

  //call your change password service now
  // you probable need the username to be saved in session
    //before your backend can run

    this.userProfileService.changePassword(passwords).subscribe({
      next: (pwCh) => {
          this.changePasswordPassword = '';
          this.changePasswordNewPassword = '';
          this.changePasswordResult = 'pw changed successfully';
      },
      error: (err) => {
        this.changePasswordResult = err.error;
        console.log(err);
      },


    });




}





}
