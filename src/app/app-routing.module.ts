import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { BlogArticleElementComponent } from './blog/blog-article-element/blog-article-element.component';
import { ProjectComponent } from './project/project.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
import { HeaderComponent } from './admin/header/header.component';
import { AdminSponsorsComponent } from './admin/admin-sponsors/admin-sponsors.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ActualityComponent } from './admin/actuality/actuality.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { ArticleComponent } from './blog/article/article.component';

import { AdminBlogArticlesComponent } from './admin/admin-blog-articles/admin-blog-articles.component';
import { RaceComponent } from './admin/race/race.component';


const routes: Routes = [
  // Toujours déclaré sur ce model : {path: 'nom_du_chemin', component: nom_du_composant, pathMatch: 'full'}
  {path: '', redirectTo: 'Accueil', pathMatch: 'full'},
  {path: 'Accueil', component: LandingPageComponent, pathMatch: 'full' },
  {path: 'SunTripTour2019', component: RacesPresentationComponent, pathMatch: 'full', data: {title: 'The Sun Trip Tour 2019'}},
  {path: 'SunTrip2020', component: RacesPresentationComponent, pathMatch: 'full', data: {title: 'The Sun Trip 2020'}},
  {path: 'Article', component: ArticleComponent, pathMatch: 'full'},
  {path: 'Projet', component: ProjectComponent, pathMatch: 'full'},
  {path: 'Sponsors', component: SponsorComponent, pathMatch: 'full'},
  {path: 'Contact', component: ContactPageComponent, pathMatch: 'full'},
  {path: 'admin', component: LogInComponent, pathMatch: 'full'},
  {path: 'admin/navigation', component: NavPageComponent, pathMatch: 'full'},
  {path: 'admin/actuality', component: ActualityComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Actualité'}},
  {path: 'admin/sponsors', component: AdminSponsorsComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Sponsors'}},
  {path: 'admin/races', component: RaceComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Courses'}},
  {path : 'admin/blog-articles', component: AdminBlogArticlesComponent, pathMatch: 'full', data: {title: 'ÉDITER BLOG > Articles'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
