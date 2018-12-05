import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { BlogArticleElementComponent } from './blog/blog-article-element/blog-article-element.component';
import { ProjectComponent } from './project/project.component';
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarColorDirective } from './navbar/navbar-color.directive';
import { SponsorsLandingComponent } from './landing-page/sponsors-landing/sponsors-landing.component';

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
    NavbarComponent,
    LandingPageComponent,
    NavbarColorDirective,
    SponsorsLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
