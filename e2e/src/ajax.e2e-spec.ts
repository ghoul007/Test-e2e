import { browser, element, by } from "protractor";

describe('ajax test', () => {
    it('test', () => {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
        element(by.css('a[href *="javascript" ]')).click()
        // browser.sleep(2000);


        let EC = browser.ExpectedConditions

        browser.wait(EC.invisibilityOf(element(by.id('loader'))), 8000);
        element(by.id('results')).getText().then((test) => {
            expect(test).toContain('Process completed');
        }
        )
    });
});