import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './project/project.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
import { HeaderComponent } from './admin/header/header.component';
import { AdminSponsorsComponent } from './admin/admin-sponsors/admin-sponsors.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarColorDirective } from './navbar/navbar-color.directive';
import { SponsorsLandingComponent } from './landing-page/sponsors-landing/sponsors-landing.component';
import { ActualityComponent } from './admin/actuality/actuality.component';
import { RaceComponent } from './admin/race/race.component';
import { AddSponsorComponent } from './admin/admin-sponsors/add-sponsor/add-sponsor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditSponsorComponent } from './admin/admin-sponsors/edit-sponsor/edit-sponsor.component';
import { RacePresentationService } from './services/race-presentation.service';
import { EmailService } from './services/email.service';
import { ModalAdminComponent } from './modal-admin/modal-admin.component';
import { DisplayReturnToTopBtnDirective } from './display-return-to-top-btn.directive';
import { LoginService } from './services/login.service';
import { CGUComponent } from './cgu/cgu.component';


@NgModule({
  declarations: [
    AppComponent,
    RacesPresentationComponent,
    ProjectComponent,
    LogInComponent,
    NavPageComponent,
    HeaderComponent,
    AdminSponsorsComponent,
    FooterComponent,
    NavbarComponent,
    LandingPageComponent,
    NavbarColorDirective,
    SponsorsLandingComponent,
    ContactPageComponent,
    SponsorComponent,
    ActualityComponent,
    RaceComponent,
    AddSponsorComponent,
    EditSponsorComponent,
    ModalAdminComponent,
    DisplayReturnToTopBtnDirective,
    CGUComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFileUploaderModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    FormsModule,
    HttpClientModule,
    HttpModule

  ],

  providers: [
    EmailService,
    RacePresentationService,
    LoginService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
