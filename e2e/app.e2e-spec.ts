import { MinorprojectPage } from './app.po';

describe('minorproject App', function() {
  let page: MinorprojectPage;

  beforeEach(() => {
    page = new MinorprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
