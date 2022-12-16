import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './components/login-register/login-register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginRegisterComponent,
  },
  {
    path: 'register',
    component: LoginRegisterComponent,
  },
  // TODO - user profile route
  // TODO - reset password route? or include with user profile
  // TODO - view claims route
  // TODO - approve/deny claims route
  // TODO - change patient/employee roles route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
