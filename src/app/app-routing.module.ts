import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
//import {ClaimComponent} from './components/claims/claim.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginRegisterComponent,
  },
  {
    path: 'register',
    component: LoginRegisterComponent,
  },
  {
    path: 'userprofile',
    component: UserProfileComponent
  },
  //{
  //  path:'claims',
    //component: ClaimComponent
 // }
  // TODO - view claims route
  // TODO - approve/deny claims route
  // TODO - change patient/employee roles route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
