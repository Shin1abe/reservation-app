import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/auth.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
//  {
//    path: 'auth', component: AuthComponent,
//    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
//    ]
//  },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: []
})
export class AuthModule { }
