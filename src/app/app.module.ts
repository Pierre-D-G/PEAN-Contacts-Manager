import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';

import { ContactsAPIService } from './services/contacts-api.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContactsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
