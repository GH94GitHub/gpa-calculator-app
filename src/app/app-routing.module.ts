/*============================
; Title: App-Routing Class File
; Author: George Henderson
; Date: 04 July 2021
; Description: Contains route info for the app.
;============================*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';


const routes: Routes = [
{
  path: '',
  component: BaseLayoutComponent,
  children: [
    {
      path: '',
      component:HomeComponent
    }
  ],
  canActivate: [ SignInGuard ]
},
{
  path: 'session',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'sign-in',
      component: SignInComponent
    },
    {
      path: 'not-found',
      component: NotFoundComponent
    }
  ]
},
{
  path:'**',
  redirectTo:'session/not-found'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
