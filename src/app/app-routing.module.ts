import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from "./accueil/accueil.component";
import { AProposComponent } from "./a-propos/a-propos.component";
import { MesProjetsComponent } from "./mes-projets/mes-projets.component";
import { ContactComponent } from "./contact/contact.component";
import { MenuComponent } from "./menu/menu.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { FourOhFourComponent } from "./four-oh-four/four-oh-four.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'mes-projets', component: MesProjetsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'mon-parcours', component: ExperiencesComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})

export class AppRoutingModule { }
