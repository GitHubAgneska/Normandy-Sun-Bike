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


import { AppComponent } from './app.component';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { BlogArticleElementComponent } from './blog/blog-article-element/blog-article-element.component';
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
import { AdminBlogArticlesComponent } from './admin/admin-blog-articles/admin-blog-articles.component';
import { AddBlogArticleComponent } from './admin/admin-blog-articles/add-blog-article/add-blog-article.component';
import { EditSponsorComponent } from './admin/admin-sponsors/edit-sponsor/edit-sponsor.component';


@NgModule({
  declarations: [
    AppComponent,
    RacesPresentationComponent,
    BlogPageComponent,
    BlogArticleElementComponent,
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
    AdminBlogArticlesComponent,
    AddBlogArticleComponent,
    EditSponsorComponent
  ],
  imports: [
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
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
