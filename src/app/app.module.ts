import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { BlogArticleElementComponent } from './blog/blog-article-element/blog-article-element.component';
import { ProjectComponent } from './project/project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
>>>>>>> d73e8be23336c1da398e634b54a06f0a72c5d49f

@NgModule({
  declarations: [
    AppComponent,
    RacesPresentationComponent,
<<<<<<< HEAD
    BlogPageComponent,
    BlogArticleElementComponent,
    RacesPresentationComponent,
    ProjectComponent,
    NavbarComponent,
    LandingPageComponent,
=======
    LogInComponent,
    NavPageComponent
>>>>>>> d73e8be23336c1da398e634b54a06f0a72c5d49f
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
