import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { BlogArticleElementComponent } from './blog/blog-article-element/blog-article-element.component';
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
// Provisoire pour test header page admin
import { HeaderComponent } from './admin/header/header.component';
// importer le composent lier à la route

const routes: Routes = [
  // Toujours déclaré sur ce model : {path: 'nom_du_chemin', component: nom_du_composant, pathMatch: 'full'}
  {path: 'SunTrip', component: RacesPresentationComponent, pathMatch: 'full'},
  {path: 'Blog', component: BlogArticleElementComponent, pathMatch: 'full'},
  {path: 'admin', component: LogInComponent, pathMatch: 'full'},
  {path: 'admin/navigation', component: NavPageComponent, pathMatch: 'full'},
  // Provisoire pour test header page admin
  {path: 'admin/header1', component: HeaderComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Actualité'}},
  {path: 'admin/header2', component: HeaderComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Sponsors'}},
  {path: 'admin/header3', component: HeaderComponent, pathMatch: 'full', data: {title: 'ÉDITER SITE > Courses'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
