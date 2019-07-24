import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ForgotpasswordComponent } from "./component/forgotpassword/forgotpassword.component";
import { ResetpasswordComponent } from "./component/resetpassword/resetpassword.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AddnoteComponent } from './component/addnote/addnote.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotpasswordComponent },
  { path: 'reset/:token', component: ResetpasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'addnote',component:AddnoteComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
