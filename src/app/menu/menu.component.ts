import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    onglet1 = "A propos";
    onglet2 = "Mes projets";
    onglet3 = "Mon parcours";
    onglet4 = "Contact";

    constructor() { }

    ngOnInit() { }

}
