import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { BlogArticleElementComponent } from './blog/blog-article-element/blog-article-element.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
// importer le composant lier à la route

const routes: Routes = [
  // Toujours déclaré sur ce modele : {path: 'nom_du_chemin', component: nom_du_composant, pathMatch: 'full'}
  {path: 'SunTrip', component: RacesPresentationComponent, pathMatch: 'full'},
  {path: 'Blog', component: BlogArticleElementComponent, pathMatch: 'full'},
  { path: 'landingPage', component:LandingPageComponent, pathMatch:'full' }
=======
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
// importer le composent lier à la route

const routes: Routes = [
  // Toujours déclaré sur ce model : {path: 'nom_du_chemin', component: nom_du_composant, pathMatch: 'full'}
  {path: 'admin', component: LogInComponent, pathMatch: 'full'},
  {path: 'admin/navigation', component: NavPageComponent, pathMatch: 'full'}
>>>>>>> d73e8be23336c1da398e634b54a06f0a72c5d49f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
