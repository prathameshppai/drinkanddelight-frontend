import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { UsernameExistenceComponent } from './username-existence/username-existence.component';



@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, UsernameExistenceComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LoginComponent, ChangePasswordComponent],
  
})
export class AuthenticationModule { }
