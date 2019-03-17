import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './router/app-routing.module';

import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardManagementComponent } from './views/dashboard-management/dashboard-management.component'
import { DigitalAccountComponent } from './views/digital-account/digital-account.component';
import { AnticipationOfReceivablesComponent } from './views/anticipation-of-receivables/anticipation-of-receivables.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { AlertsComponent } from './components/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardManagementComponent,
    DigitalAccountComponent,
    AnticipationOfReceivablesComponent,
    HeaderComponent,
    BreadcrumbComponent,
    ShortcutsComponent,
    AlertsComponent
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
