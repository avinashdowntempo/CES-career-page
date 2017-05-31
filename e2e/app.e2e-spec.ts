import { CesFrontendPage } from './app.po';

describe('ces-frontend App', () => {
  let page: CesFrontendPage;

  beforeEach(() => {
    page = new CesFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
