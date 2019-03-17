import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardManagementComponent } from '../views/dashboard-management/dashboard-management.component';
import { DigitalAccountComponent } from '../views/digital-account/digital-account.component';
import { AnticipationOfReceivablesComponent } from '../views/anticipation-of-receivables/anticipation-of-receivables.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'management',
    pathMatch: 'full'
  },

  {
    path: 'management',
    component: DashboardManagementComponent
  },

  {
    path: 'account',
    component: DigitalAccountComponent
  },

  {
    path: 'anticipation',
    component: AnticipationOfReceivablesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
