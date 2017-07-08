import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactsAPIService {

  private apiURL: string;

  constructor(private _http: Http) { }

  getContacts = () => {
    this.apiURL = 'http://localhost:3000/api/contacts';
    return this._http.get(this.apiURL)
      .map(res => res.json())
  }

  getContact = (id: string) => {
    this.apiURL = 'http://localhost:3000/api/contacts/' + id;
    return this._http.get(this.apiURL)
      .map(res => res.json())
  }

  saveContact = (contact) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(contact)
    this.apiURL = 'http://localhost:3000/api/contacts';
    return this._http.post(this.apiURL, body, { headers: headers })
  }
}
