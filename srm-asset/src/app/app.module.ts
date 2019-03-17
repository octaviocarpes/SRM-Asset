import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './router/app-routing.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardManagementComponent } from './components/dashboard-management/dashboard-management.component';
import { DigitalAccountComponent } from './components/digital-account/digital-account.component';
import { AnticipationOfReceivablesComponent } from './components/anticipation-of-receivables/anticipation-of-receivables.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardManagementComponent,
    DigitalAccountComponent,
    AnticipationOfReceivablesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
