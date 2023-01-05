import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePassword } from 'src/app/models/change-password';
import { LoginRegisterService } from 'src/app/services/login-register.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  constructor(
    private userProfileService: UserProfileService,
    private loginService: LoginRegisterService,
    private route: ActivatedRoute,
    private router: Router

  ){}

  changePasswordUsername = sessionStorage.getItem("loggedInUser") + '';
  changePasswordPassword = '';
  changePasswordNewPassword = '';

  changePasswordResult: string = '';
  changeRoleResult: string = '';
  pin: number = 0;

  changeRoleResult: string = '';
  pin: number = 0;

  name: string = '';
  activeClass: string = 'tab-pane fade show active';
  inactiveClass: string = 'tab-pane fade';

  ngOnInit(): void {
    this.route.url.subscribe((params) => {
      this.name = params[0].path;
    });
  }
<<<<<<< HEAD
changeRole(){
  this.userProfileService.changeRole(this.pin).subscribe({
    next: (numCh) => {
      if(this.pin == 1234){
        this.changeRoleResult = 'Role changed successfully!';
      }
      else{
        this.changeRoleResult = 'Role change failed - incorrect PIN.';
      }
    },
    error: (err) => {
      this.changeRoleResult = err.error;
      console.log(err);
    }
  })
}
=======

  changeRole(){

    this.userProfileService.changeRole(this.pin).subscribe({
  
      next: (numCh) => {
  
        this.changeRoleResult = 'Role changed successfully!';
  
      },
  
      error: (err) => {
  
        this.changeRoleResult = err.error;
  
        console.log(err);
  
      }
  
    })
  
  }

>>>>>>> frontEndWork1
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

          setTimeout(()=>{
            this.changePasswordResult = 'redirecting...';
            this.loginRedirect();
            }, 1750);

            this.loginService.isLoggedIn.next(false);
    this.loginService.isAgent.next(false);
    this.loginService.logoutUser().subscribe({
      next: () => {
        sessionStorage.clear()
        console.log("session storage empty?: "+String(sessionStorage.length == 0)+", the session and session object parameters have been cleared.");
        // this.logoutResult = "Log out successful!";

        // setTimeout(()=>{
        //   this.logoutResult = "Log out successful!";
        // }, 1750);
        
        this.loginRedirect();
      },
      error: (err) => {
        console.log('err', err);
        
      },
    });

      },
      error: (err) => {
        this.changePasswordResult = err.error;
        console.log(err);
      },


    });




}


loginRedirect() {
  setTimeout(()=>{
    this.router.navigate(['login']);
  }, 1750);
}





}
