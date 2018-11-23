import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { BlogArticleElementComponent } from './blog/blog-article-element/blog-article-element.component';

@NgModule({
  declarations: [
    AppComponent,
    RacesPresentationComponent,
    BlogPageComponent,
    BlogArticleElementComponent,
    RacesPresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
