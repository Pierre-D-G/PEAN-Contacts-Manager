import { Component, OnInit, Input } from '@angular/core';
import 'rxjs/add/operator/map';

import { ActivatedRoute, Router } from '@angular/router';

import { ContactsAPIService } from '../../../services/contacts-api.service';

import { Contact } from '../../../models/contact';



@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {
  contact = new Contact();

  first_name: string;
  last_name: string;
  email: string;
  company: string;
  avatar_url: string;
  home_phone: string;
  mobile_phone: string;
  work_phone: string;
  street_address: string;
  city: string;
  state: string;
  zip_code: string;
  constructor(private _contactsAPIService: ContactsAPIService, private _route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._contactsAPIService.getContact(id)
          .then((contact: any) => {
            this.contact = contact
            console.log(contact)
            return contact
          })
      }
      )
  }


  editContact() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._contactsAPIService.updateContact(id, this.contact)
          .then((response) => {
            this._router.navigateByUrl('/');
            return true
          }, error => {
            console.error('Error updating new contact');
            return false
          })
      }
      )
  }

}
