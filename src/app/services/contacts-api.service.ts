import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams, Response } from '@angular/http';
import { Contact } from '../models/contact';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactsAPIService {

  private apiURL = 'http://localhost:3000/api/contacts';

  constructor(private _http: Http) { }

  getContacts(): Promise<Contact[]> {
    return this._http.get(this.apiURL)
      .toPromise()
      .then(response => response.json() as Contact[])
      .catch(this.handleErrors)
  }

  getContact(id: string): Promise<any> {
    return this._http.get(this.apiURL + '/' + id)
      .toPromise()
      .then(response => response.json() as any)
      .catch(this.handleErrors)
  }

  createContact(newContact: Contact): Promise<Contact> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(newContact);
    return this._http.post(this.apiURL, body, { headers: headers })
      .toPromise()
      .then(response => response.json() as Contact)
      .catch(this.handleErrors)
  }

  updateContact(id: string, putContact: Contact): Promise<Contact> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = JSON.stringify(putContact)
    return this._http.put(this.apiURL + '/' + id, body, { headers: headers })
      .toPromise()
      .then(response => response.json() as Contact)
      .catch(this.handleErrors)
  }

  deleteContact(id: String): Promise<String> {
    return this._http.delete(this.apiURL + '/' + id)
      .toPromise()
      .then(response => response.json() as String)
      .catch(this.handleErrors)
  }

  private handleErrors(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
  }
}
