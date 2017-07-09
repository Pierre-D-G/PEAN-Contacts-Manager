import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../../models/contact';

import { ContactsAPIService } from '../../../services/contacts-api.service';

@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  providers: [ContactsAPIService]
})
export class AddNewContactComponent implements OnInit {
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
  contact: Contact[];

  constructor(private _contactsAPIService: ContactsAPIService,
    private _router: Router) { }

  ngOnInit() {
  }

  addContact() {
    let newContact: Contact = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      company: this.company,
      avatar_url: this.avatar_url,
      home_phone: this.home_phone,
      mobile_phone: this.mobile_phone,
      work_phone: this.work_phone,
      street_address: this.street_address,
      city: this.city,
      state: this.state,
      zip_code: this.zip_code
    }



    this._contactsAPIService.createContact(newContact)
      .then((data) => {
        console.log('Added contact');
        this._router.navigateByUrl('/');
        return true
      }, error => {
        console.error('Error adding new contact');
        return false
      })
  }

}
