import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { ContactsAPIService } from '../../../services/contacts-api.service';
import { Contact } from '../../../models/contact';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  providers: [ContactsAPIService]
})
export class ContactComponent implements OnInit {
  contact: Contact[];
  constructor(private _contactsAPIService: ContactsAPIService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this._contactsAPIService.getContact(id)
          .then((contact: Contact[]) => {
            this.contact = contact
            console.log(contact)
            return contact
          })
      }
      )
  }

  deleteContact(id) {
    this._contactsAPIService.deleteContact(id)
      .then((response) => {
        console.log('Deleted Contact')
        this._router.navigateByUrl('/');

      })
  }
}
