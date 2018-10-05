import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    browser.get('https://angularjs.org')
    browser.sleep(5000)
console.log('fffffffff');
    expect(page.getParagraphText()).toEqual('Welcome to protractor!');
  });

   it('test2', () => {
    expect(true).toBe(true)
  });
});
