let homepage = require("../pages/homepage")

describe("suite", function(){
    it("test 1", function(){
        // browser.get("http://juliemr.github.io/protractor-demo/");
        // var input1 = element(by.model('first'));
        // input1.sendKeys('10');
        // var input2 = element(by.model('second'));
        // input2.sendKeys('40');
        // var button = element(by.buttonText('Go!'));
        // button.click();

        // element(by.model('first')).sendKeys('10');
        // element(by.model('second')).sendKeys('40');
        // element(by.buttonText('Go!')).click();
        // var result = element(by.cssContainingText('.ng-binding',"50"));
        
        // expect(result.getText()).toEqual('50')
        // browser.sleep(5000);

        homepage.get("http://juliemr.github.io/protractor-demo/");
        homepage.f_no('5');
        homepage.s_no('4');
        homepage.button();
        browser.sleep(5000);
        homepage.verifyResult("9")

    });
    it("test 2", function(){
        homepage.get("http://juliemr.github.io/protractor-demo/");
        homepage.f_no('7');
        homepage.s_no('5');
        homepage.button1();
        browser.sleep(5000);
        homepage.verifyResult("12")

    });

});