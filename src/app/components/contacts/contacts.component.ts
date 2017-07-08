import { Component, OnInit } from '@angular/core';
import { ContactsAPIService } from '../../services/contacts-api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  providers: [ContactsAPIService]
})
export class ContactsComponent implements OnInit {
  contacts: any = [];
  constructor(private _contactsAPIService: ContactsAPIService) { }

  ngOnInit() {
    this._contactsAPIService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      console.log(contacts);
    })
  }

}
