import { MfpPage } from './app.po';

describe('mfp App', () => {
  let page: MfpPage;

  beforeEach(() => {
    page = new MfpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
