import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileClaimComponent } from './components/file-claim/file-claim.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

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
  {
    path: 'fileclaim',
    component: FileClaimComponent
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
