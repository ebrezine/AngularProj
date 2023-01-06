import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './components/claims/claim.component';
import { FileClaimComponent } from './components/file-claim/file-claim.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { ProcessClaimComponent } from './components/process-claim/process-claim.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

//>>>>>>> frontEndWork1
const routes: Routes = [
  {
    path: 'login',
    component: LoginRegisterComponent
  },
  {
    path: 'register',
    component: LoginRegisterComponent
  },
  {
    path: 'userprofile',
    component: UserProfileComponent
  },
  {
    path: 'fileclaim',
    component: FileClaimComponent
  },
  {
    path: 'viewclaim',
    component: ClaimComponent
  },
  {
    path: 'processclaim',
    component: ProcessClaimComponent
  }
  // TODO - view claims route
  // TODO - approve/deny claims route
  // TODO - change patient/employee roles route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
