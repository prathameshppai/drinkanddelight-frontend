import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { UsernameExistenceComponent } from './username-existence/username-existence.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const secondaryRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'username-existence', component: UsernameExistenceComponent},
  { path: 'change-password', component: ChangePasswordComponent}
];

@NgModule({
  declarations: [
    LoginComponent, 
    UsernameExistenceComponent,
    ChangePasswordComponent ],

  imports: [
    RouterModule.forChild(secondaryRoutes),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    CommonModule,
    FormsModule
  ],

  exports: [
    LoginComponent, 
    UsernameExistenceComponent,
    ChangePasswordComponent],
  
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AuthenticationModule { }
