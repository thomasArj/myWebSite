import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import { MyNewInterface } from "../my-new-interface";
import { MyNewInterfaceForms } from "../my-new-interface-forms";
import { MyNewInterfaceDip } from "../my-new-interface-dip";

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
  providers: [ApiService]
})

export class ExperiencesComponent implements OnInit {

    _postArray: MyNewInterface[];
    _postArrayForms: MyNewInterfaceForms[];
    _postArrayDip: MyNewInterfaceDip[];

    constructor(private apiService: ApiService){ }

    getPosts(): void {
        this.apiService.getPosts()
            .subscribe(
                resultArray => this._postArray = resultArray,
                error => console.log("Error :: " + error)
            )
    }

    getPostsForms(): void {
        this.apiService.getPostsForms()
            .subscribe(
                resultArray => this._postArrayForms = resultArray,
                error => console.log("Error :: " + error)
            )
    }

    getPostsDip(): void {
        this.apiService.getPostsDip()
            .subscribe(
                resultArray => this._postArrayDip = resultArray,
                error => console.log("Error :: " + error)
            )
    }

    ngOnInit(): void {
        this.getPosts();
        this.getPostsForms();
        this.getPostsDip();
    }

}
