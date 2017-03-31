import { Angular2SafeDirectivesPage } from './app.po';

describe('angular2-safe-directives App', function() {
  let page: Angular2SafeDirectivesPage;

  beforeEach(() => {
    page = new Angular2SafeDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
