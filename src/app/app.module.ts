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
import { HeaderComponent } from './admin/header/header.component';
import { ActualityComponent } from './admin/actuality/actuality.component';
import { RaceComponent } from './admin/race/race.component';

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
    ActualityComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
