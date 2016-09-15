import { ReactiveJsNg2Page } from './app.po';

describe('reactive-js-ng2 App', function() {
  let page: ReactiveJsNg2Page;

  beforeEach(() => {
    page = new ReactiveJsNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
