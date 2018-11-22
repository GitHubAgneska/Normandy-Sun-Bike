import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './admin/log-in/log-in.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesPresentationComponent,
    LogInComponent,
    AdminLogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
