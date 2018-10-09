import { browser, by, element, protractor } from 'protractor';
import { Selector } from './selector';
describe('protocommerce site test', () => {


   xit('create form test', () => {

        browser.get('https://qaclickacademy.github.io/protocommerce/');

     
        element(Selector.getName()).sendKeys('alya');
        element(by.css('input[name="email"]')).sendKeys('alya@rosafian.com');
        element(by.id('exampleInputPassword1')).sendKeys('ahmed');
        element(by.id('exampleCheck1')).click();
        element.all(by.cssContainingText('#exampleFormControlSelect1 option','Female')).click();
        element.all(by.css('[name="inlineRadioOptions"]')).first().click();
        element(by.buttonText('Submit')).click().then(()=>{

            expect(element(by.css('[class*="alert-success"]')).getText()).toContain('successfully')

        });

        element(by.css('input[name="name"]')).clear();
        // element(by.css('input[name="email"]')).click();


          browser.sleep(5000);



    });
});