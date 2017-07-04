import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsAPIService {

  private apiURL: string;

  constructor(private _http: Http) { }

  getContacts = () => {
    this.apiURL = '/api/contacts';
    return this._http.get(this.apiURL)
              .map(res => res.json())
  }
}
