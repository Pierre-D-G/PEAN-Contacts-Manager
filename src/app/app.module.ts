import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ContactsAPIService } from './services/contacts-api.service';
import { AddNewContactComponent } from './components/contacts/add-new-contact/add-new-contact.component';
import { ContactComponent } from './components/contacts/contact/contact.component';
import { EditContactComponent } from './components/contacts/edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    NavigationComponent,
    AddNewContactComponent,
    ContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ContactsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
