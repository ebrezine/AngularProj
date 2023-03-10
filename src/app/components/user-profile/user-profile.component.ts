import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangePassword } from 'src/app/models/change-password';
import { DarkModeService } from 'src/app/services/dark-mode.service';
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
    private darkModeService: DarkModeService,
    private route: ActivatedRoute,
    private router: Router

  ){}

  changePasswordUsername = sessionStorage.getItem("loggedInUser") + '';
  changePasswordPassword = '';
  changePasswordNewPassword = '';

  changePasswordResult: string = '';
  changeRoleResult: string = '';
  pin: number = 0;

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


loginRedirect() {
  setTimeout(()=>{
    this.router.navigate(['login']);
  }, 1750);
}





}
