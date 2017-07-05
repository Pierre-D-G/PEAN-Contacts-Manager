import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './components/contacts/contacts.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/contacts',
        pathMatch: 'full'
    },
    {
      path:
      'contacts',
      component: ContactsComponent
    }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
