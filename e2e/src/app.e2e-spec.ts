import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';
var using = require('jasmine-data-provider');
describe('workspace-project App', () => {
  let page: AppPage;
  let add = (a, b, type) => {
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);

    element.all(by.tagName('option')).each(item => {
      item.getAttribute('value').then(value => {

        if (value == type) {
          item.click()
        }
      })

    })

    element(by.id('gobutton')).click()
    browser.sleep(2000)
  }
  beforeEach(() => {
    page = new AppPage();
  });


  using([{ a: 5, b: 5, expected: 10 }, { a: 2, b: 5, expected: 7 }], (data, description) => {

    it('Protractor element demo', () => {
      browser.waitForAngularEnabled(false);
      browser.get('https://www.google.com')
      browser.get('http://juliemr.github.io/protractor-demo')
      add(data.a, data.b, "MULTIPLICATION")
      // add("5", "1", "DIVISION")
      expect(data.a + data.b).toEqual(data.expected)

      browser.sleep(2000)

      element.all(by.repeater('result in memory')).count().then(res => { console.log(res) })
      element.all(by.repeater('result in memory')).each(ele => {
        ele
          .element(by.css('td:nth-child(3)')).getText()
          .then(res => console.log(res))
      })

      // element(by.repeater('result in memory'))
      //   .element(by.css('td:nth-child(3)')).getText()
      //   .then(res => console.log(res))

      // expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("10")
    });
  });
})
