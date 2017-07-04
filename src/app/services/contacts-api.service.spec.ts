import { TestBed, inject } from '@angular/core/testing';

import { ContactsAPIService } from './contacts-api.service';

describe('ContactsAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactsAPIService]
    });
  });

  it('should be created', inject([ContactsAPIService], (service: ContactsAPIService) => {
    expect(service).toBeTruthy();
  }));
});
