import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contacts/contact/contact.component'
import { AddNewContactComponent } from './components/contacts/add-new-contact/add-new-contact.component';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';

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
      path: 'contacts/:id',
      component: ContactComponent
    },
    {
      path: 'contacts/new',
      component: AddNewContactComponent
    },
    {
      path: 'contacts/:id/edit',
      component: EditContactComponent
    }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
