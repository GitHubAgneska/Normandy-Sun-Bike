import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// importer le composent lier à la route

import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  // Toujours déclaré sur ce model : {path: 'nom_du_chemin', component: nom_du_composant, pathMatch: 'full'}

  { path: 'landingPage', component:LandingPageComponent, pathMatch:'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
