let homepage = function () {

    let first_no_input = element(by.model('first'));
    let second_no_input = element(by.model('second'));
    let goButton = element(by.buttonText('Go!'));

    this.get = function (url) {
        browser.get(url);

    }
    this.f_no = function (first_no) {
        first_no_input.sendKeys(first_no);
    }

    this.s_no = function (second_no) {
        second_no_input.sendKeys(second_no);
    }
    this.button = function () {
        goButton.click();
    }
    this.verifyResult = function (total) {
        var result = element(by.cssContainingText('.ng-binding', total));
        expect(result.getText()).toEqual(total)
    }
};

module.exports = new homepage();