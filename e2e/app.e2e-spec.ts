import { Angular2ServicesDiPage } from './app.po';

describe('angular2-services-di App', function() {
  let page: Angular2ServicesDiPage;

  beforeEach(() => {
    page = new Angular2ServicesDiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
