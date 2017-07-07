import { Component, OnInit } from '@angular/core';
import { ContactsAPIService } from '../../../services/contacts-api.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactsAPIService]
})
export class ContactComponent implements OnInit {
  contact: any = [];
  constructor(private _contactsAPIService: ContactsAPIService,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
        .subscribe((id) => {
          this._contactsAPIService.getContact(id)
            .subscribe(contact => {
              this.contact = contact;
              console.log(contact)
            })
        })
  }

}
