import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginChildComponent } from './login-child/login-child.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children:[
      {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
      },
      {
        path:'login',
        component:LoginChildComponent,
      },
      {
        path:'register',
        component:RegisterComponent
      }
    ]
   }
  ];
 
 @NgModule({
   declarations: [
     LoginComponent,
     RegisterComponent,
     LoginChildComponent
   ],
   imports: [
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     RouterModule.forChild(routes),
 
   ]
 })
 export class LoginModule { }
