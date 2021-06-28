import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from './components/actions/actions.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  {path : '/', component: LandingComponent},
  {path : '/landing', component: LandingComponent},
  {path : '/login', component: LoginComponent},
  {path : '/logout', component: LogoutComponent},
  {path : '/profile', component: ProfileComponent},
  {path : '/reset', component: ResetPasswordComponent},
  {path : '/transactions', component: TransactionsComponent},
  {path : '/actions', component: ActionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
