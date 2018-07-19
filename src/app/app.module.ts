import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './/app-routing.module';
import { AProposComponent } from './a-propos/a-propos.component';
import { MenuComponent } from './menu/menu.component';
import { MesProjetsComponent } from './mes-projets/mes-projets.component';
import { ContactComponent } from './contact/contact.component';
import { MenuDesktopComponent } from './menu-desktop/menu-desktop.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AProposComponent,
    MenuComponent,
    MesProjetsComponent,
    ContactComponent,
    MenuDesktopComponent,
    ExperiencesComponent,
    FooterComponent,
    NavComponent,
    FourOhFourComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
