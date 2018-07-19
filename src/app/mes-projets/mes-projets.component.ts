import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes-projets',
  templateUrl: './mes-projets.component.html',
  styleUrls: ['./mes-projets.component.css']
})
export class MesProjetsComponent implements OnInit {
    titre1 = "Projets de la formation";
    titre2 = "Projets personnel";
    titrep1 = "Blueasy";
    titrep2 = "Langerba";
    titrep3 = "ExploFiles";
    titrep4 = "MemeGenerator";
    titrep5 = "weTransfert";
    titrep6 = "Blog";
    titrep7 = "Snake";
    titrep8 = "FastFood Website";
    descriptionp1 = "Maquette réalisée à partir d'un template avec du HTML5, CSS3.";
    descriptionp2 = "Maquette réalisée à partir d'un template avec du HTML5, CSS3 et Bootstrap4. Responsive design.";
    descriptionp3 = "Explorateur de fichier realisée avec du HTML5, CSS3, PHP7 et AJAX. Ce projet permet de naviguer entre les dossier de votre PC et et de voir les fichiers qu'ils contienent.";
    descriptionp4 = "Generateur de meme réalisé avec du HTML5, CSS3, PHP7 et MySQL. Ce site permet de choisir un image et d'écrire du texte dessus et de la télécharger et de la partager.";
    descriptionp5 = "Site de telechargement de fichier réalisé avec du HTML5, CSS3, PHP7 et MySQL. Il permet d'uploader des fichiers de tout type inferieur à 3mB pour la partie publique et pour les utilisateur qui se créer un compte des fichiers jusqu'à 7mB.";
    descriptionp6 = "Site réalisé avec du HTML5, CSS3, PHP7 et MySQL. Il permet à toute les personnes d'écrire un article sur un sujet et de le poster.";
    descriptionp7 = "Jeu Snake réalisé avec du javascript.";
    descriptionp8 = "Site réalisé avec du HTML5, CSS3, PHP7 et MySQL. Il permet de voir tous les produits disponibles et de voir leur description sur une autre page.";
    tp1 = "1 semaine - 4 personnes";
    tp2 = "1 semaine - 3 personnes";
    tp3 = "1 semaine - 3 personnes";
    tp4 = "1 semaine - 3 personnes";
    btn = "Voir";


  constructor() { }

  ngOnInit() {
  }
}
