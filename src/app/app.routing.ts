import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contacts/contact/contact.component'
import { AddNewContactComponent } from './components/contacts/add-new-contact/add-new-contact.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/contacts',
        pathMatch: 'full'
    },
    {
      path: 'contacts',
      component: ContactsComponent
    },
    {
      path: 'contacts/contact/:id',
      component: ContactComponent
    },
    {
      path: 'contacts/new',
      component: AddNewContactComponent
    }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
