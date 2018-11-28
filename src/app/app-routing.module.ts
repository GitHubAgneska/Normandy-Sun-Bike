import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
// importer le composent lier à la route

const routes: Routes = [
  // Toujours déclaré sur ce model : {path: 'nom_du_chemin', component: nom_du_composant, pathMatch: 'full'}
  {path: 'admin/log-in', component: LogInComponent, pathMatch: 'full'},
  {path: 'admin/navigation', component: NavPageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
