import { browser, by, element } from "protractor";

describe('Calculator TEST', () => {
    xit('test addition', () => {
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("10");
        element(by.model("second")).sendKeys("2");
        element.all(by.css("option")).each((val) => {
            console.log("eeeeeeeeee", val.getAttribute("value"));
            val.getAttribute("value").then((item) => {
                if (item == "DIVISION") {
                    val.click();
                }
            })

        })
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        element(by.css("h2")).getText().then((val) => {
            expect(val).toBe("5");
        })
    });
});