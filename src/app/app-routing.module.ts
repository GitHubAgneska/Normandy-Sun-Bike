import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { BlogArticleElementComponent } from './blog/blog-article-element/blog-article-element.component';
import { ProjectComponent } from './project/project.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
// importer le composant lier à la route

const routes: Routes = [
  // Toujours déclaré sur ce model : {path: 'nom_du_chemin', component: nom_du_composant, pathMatch: 'full'}
  {path: 'landingPage', component: LandingPageComponent, pathMatch:'full' },
  {path: 'SunTrip', component: RacesPresentationComponent, pathMatch: 'full'},
  {path: 'Blog', component: BlogArticleElementComponent, pathMatch: 'full'},
  {path: 'Projet', component: ProjectComponent, pathMatch: 'full'},
  {path: 'Sponsors', component: SponsorComponent, pathMatch: 'full'},
  {path: 'admin/log-in', component: LogInComponent, pathMatch: 'full'},
  {path: 'admin/navigation', component: NavPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
