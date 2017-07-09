import { Component, OnInit } from '@angular/core';
import { ContactsAPIService } from '../../services/contacts-api.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  providers: [ContactsAPIService]
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  constructor(private _contactsAPIService: ContactsAPIService) { }

  ngOnInit() {
    this._contactsAPIService.getContacts()
      .then((contacts: Contact[]) => {
        this.contacts = contacts.map((contact) => {
          console.log(contact)
          return contact
        })
      })
  }

}
