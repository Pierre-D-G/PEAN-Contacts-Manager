import { Component, OnInit } from '@angular/core';
import { ContactsAPIService } from '../../services/contacts-api.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactsAPIService]
})
export class ContactsComponent implements OnInit {

  constructor(private _contactsAPIService: ContactsAPIService) { }

  ngOnInit() {
    this._contactsAPIService.getContacts().subscribe(res => {
      console.log(res)
    })
  }

}
