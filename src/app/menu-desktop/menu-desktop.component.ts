import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-desktop',
  templateUrl: './menu-desktop.component.html',
  styleUrls: ['./menu-desktop.component.css']
})
export class MenuDesktopComponent implements OnInit {
    onglet1 = "A propos";
    onglet2 = "Mes projets";
    onglet3 = "Mon parcours";
    onglet4 = "Contact";

  constructor() { }

  ngOnInit() {
  }

}
