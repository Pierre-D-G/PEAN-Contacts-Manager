import { ContactsManagerPage } from './app.po';

describe('contacts-manager App', () => {
  let page: ContactsManagerPage;

  beforeEach(() => {
    page = new ContactsManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
