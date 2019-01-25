import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RacesPresentationComponent } from './races-presentation/races-presentation.component';
import { ProjectComponent } from './project/project.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { LogInComponent } from './admin/log-in/log-in.component';
import { NavPageComponent } from './admin/nav-page/nav-page.component';
import { AdminSponsorsComponent } from './admin/admin-sponsors/admin-sponsors.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ActualityComponent } from './admin/actuality/actuality.component';
import { RaceComponent } from './admin/race/race.component';
import { CGUComponent } from './cgu/cgu.component';
import { IsConnectedGuard } from './is-connected.guard';

const routes: Routes = [
  {path: '', redirectTo: 'Accueil', pathMatch: 'full'},
  {path: 'Accueil', component: LandingPageComponent, pathMatch: 'full' },
  {path: 'CGU', component: CGUComponent, pathMatch: 'full'},
  {path: 'SunTripTour2019', component: RacesPresentationComponent, pathMatch: 'full', data: {title: 'The Sun Trip Tour 2019'}},
  {path: 'SunTrip2020', component: RacesPresentationComponent, pathMatch: 'full', data: {title: 'The Sun Trip 2020'}},
  {path: 'Projet', component: ProjectComponent, pathMatch: 'full'},
  {path: 'Sponsors', component: SponsorComponent, pathMatch: 'full'},
  {path: 'Contact', component: ContactPageComponent, pathMatch: 'full'},
  {path: 'admin', component: LogInComponent, pathMatch: 'full'},
  {path: 'admin/navigation', component: NavPageComponent, pathMatch: 'full', 'canActivate': [IsConnectedGuard]},
  {path: 'admin/actuality', component: ActualityComponent, pathMatch: 'full', 'canActivate': [IsConnectedGuard], data: {title: 'ÉDITER SITE > Actualité'}},
  {path: 'admin/sponsors', component: AdminSponsorsComponent, pathMatch: 'full', 'canActivate': [IsConnectedGuard], data: {title: 'ÉDITER SITE > Sponsors'}},
  {path: 'admin/races', component: RaceComponent, pathMatch: 'full', 'canActivate': [IsConnectedGuard], data: {title: 'ÉDITER SITE > Courses'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
