import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';
import { AccountStatementComponent } from './pages/account-statement/account-statement.component';
import { AccountSummaryComponent } from './pages/account-summary/account-summary.component';
import { FundTransferComponent } from './pages/fund-transfer/fund-transfer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'',
    component:HomepageComponent,
    pathMatch:'full',
  },
  {
    path:'registration',
    component:RegisterComponent,
    pathMatch:'full',
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    children:[
      {
        path:'accountdetails',
        component:AccountDetailsComponent
      },
      {
        path:'accountstatement',
        component:AccountStatementComponent
      }, 
      {
        path:'accountsummary',
        component:AccountSummaryComponent
      },
      {
        path:'fundtransfer',
        component:FundTransferComponent
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
