import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';

import { ContactsAPIService } from './services/contacts-api.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
