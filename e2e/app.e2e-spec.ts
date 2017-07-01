import { NumPadPage } from './app.po';

describe('num-pad App', () => {
  let page: NumPadPage;

  beforeEach(() => {
    page = new NumPadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
