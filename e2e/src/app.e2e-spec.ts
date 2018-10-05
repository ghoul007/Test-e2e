import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });



  it('Protractor element demo', () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.google.com')
    browser.get('http://juliemr.github.io/protractor-demo')
    element(by.model('first')).sendKeys("5");
    element(by.model('second')).sendKeys("5");
    element(by.id('gobutton')).click()
    browser.sleep(3000)

   
    expect( element(by.css("h2[class='ng-binding']")).getText()).toBe("10")
  });
});
