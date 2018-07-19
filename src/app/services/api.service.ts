import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import  "rxjs/Rx";
import { MyNewInterface } from "../my-new-interface";
import { MyNewInterfaceForms } from "../my-new-interface-forms";
import { MyNewInterfaceDip } from "../my-new-interface-dip";


@Injectable()
export class ApiService {

    private _postURL = "http://localhost:3000/api/experiences";
    private _postURLForms = "http://localhost:3000/api/formations";
    private _postURLDip = "http://localhost:3000/api/diplomes";

    constructor(private http: Http) { }

    getPosts(): Observable<MyNewInterface[]> {
        return this.http
            .get(this._postURL)
            .map((response: Response) => {
                return <MyNewInterface[]>response.json();
            })
            .catch(this.handleError);
    }

    getPostsForms(): Observable<MyNewInterfaceForms[]> {
        return this.http
            .get(this._postURLForms)
            .map((response: Response) => {
                return <MyNewInterfaceForms[]>response.json();
            })
            .catch(this.handleError);
    }

    getPostsDip(): Observable<MyNewInterfaceDip[]> {
        return this.http
            .get(this._postURLDip)
            .map((response: Response) => {
                return <MyNewInterfaceDip[]>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
