import { TallyPage } from './app.po';

describe('tally App', () => {
  let page: TallyPage;

  beforeEach(() => {
    page = new TallyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
