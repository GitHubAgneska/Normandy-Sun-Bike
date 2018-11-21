import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminLogInComponent } from './admin-log-in/admin-log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLogInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
