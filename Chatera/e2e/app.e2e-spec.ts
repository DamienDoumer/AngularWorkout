import { ChateraPage } from './app.po';

describe('chatera App', function() {
  let page: ChateraPage;

  beforeEach(() => {
    page = new ChateraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
