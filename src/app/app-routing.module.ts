import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { BlogArticleElementComponent } from './blog/blog-article-element/blog-article-element.component';
import { ProjectComponent } from './project/project.component';
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
import { AdminSponsorsComponent } from './admin-sponsors/admin-sponsors.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ActualityComponent } from './admin/actuality/actuality.component';
import { RaceComponent } from './admin/race/race.component';
// importer le composent lié à la route

const routes: Routes = [
  // Toujours déclaré sur ce model : {path: 'nom_du_chemin', component: nom_du_composant, pathMatch: 'full'}

  {path: 'SunTripTour2019', component: RacesPresentationComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Actualité'}},
  {path: 'SunTrip2020', component: RacesPresentationComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Actualité'}},
  {path: 'Blog', component: BlogArticleElementComponent, pathMatch: 'full'},
  {path: 'Contact', component: ContactPageComponent, pathMatch: 'full'},
  {path: 'Project', component: ProjectComponent, pathMatch: 'full'},
  {path: 'Admin', component: LogInComponent, pathMatch: 'full'},
  {path: 'admin/navigation', component: NavPageComponent, pathMatch: 'full'},
  {path: 'admin/actuality', component: ActualityComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Actualité'}},
  {path: 'admin/sponsors', component: AdminSponsorsComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Sponsors'}},
  {path: 'admin/races', component: RaceComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Courses'}},
  {path: 'Accueil', component: LandingPageComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'Accueil', pathMatch: 'full'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
