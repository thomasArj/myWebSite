import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bjr = "Bonjour";
  hello = "Hello";
  dia = "Bom Dia";
  texte1 = "Je m'apelle Thomas, j'ai 20 ans. Je suis actuellement en formartion Développeur Web chez Aformac à Limoges. Cette formation a pour but de nous faire obtenir un titre professionel de niveau III.";
  texte2 = "Au cours de cette formation nous apprenons différents languages de programation, un CMS et des frameworks :";
  techno = "HTML5,  CSS3,  Sass,  Bootstrap,  Javascript,  Jquery,  PHP7,  MySQL,  Wordpress et Angular5(MEAN)."
  texte3 = "Le domaine du developpement web est un domaine qui m'attire beaucoup. Mon objectif est de décrocher mon titre professionel et grâce a cette formation est de devenir développeur front-end et utiliser principalment le javascript.";
}
