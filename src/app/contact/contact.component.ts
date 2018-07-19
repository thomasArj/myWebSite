import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    titre = "N'hésitez pas ! Contactez moi !";
    choix1 = "Mme.";
    choix2 = "M.";
    label1 = "Nom";
    label2 = "Prénom";
    label3 = "E-mail";
    label4 = "Objet";
    option1 = "Projet";
    option2 = "Recrutement";
    option3 = "Autres";
    label5 = "Message";
    btn = "Envoyer";

    contact: FormGroup;

     constructor(private fb: FormBuilder) {
         this.contact = fb.group({
             contactFormName: ['', Validators.required],
             contactFormEmail: ['', [Validators.required, Validators.email]],
             contactFormSubject: ['', Validators.required],
             contactFormMessage: ['', Validators.required]
         });
     }
}
