import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    onglet1 = "A propos";
    onglet2 = "Mes projets";
    onglet3 = "Mon parcours";
    onglet4 = "Contact";
    np = "Araujo Thomas ";
    date = " 2018";
    lieu = "Limoges, ";
    pays = "France";
    mail = "thomas.araujo87@gmail.com"

  constructor() { }

  ngOnInit() {
  }

}
