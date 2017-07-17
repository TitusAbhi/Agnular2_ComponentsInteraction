import { LifecycleDemoPage } from './app.po';

describe('lifecycle-demo App', function() {
  let page: LifecycleDemoPage;

  beforeEach(() => {
    page = new LifecycleDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
