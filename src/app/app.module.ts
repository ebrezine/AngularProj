import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from './intereceptors/custom.interceptor';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DarkModeTogglePipe } from './pipes/dark-mode-toggle.pipe';
import { FileClaimComponent } from './components/file-claim/file-claim.component';
import { ProcessClaimComponent } from './components/process-claim/process-claim.component';
import { ClaimComponent } from './components/claims/claim.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, LoginRegisterComponent, UserProfileComponent, DarkModeTogglePipe, FileClaimComponent, ClaimComponent, ProcessClaimComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
