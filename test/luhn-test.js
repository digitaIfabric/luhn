var assert = require("chai").assert;
var check = require("../lib/luhn");

describe("Check", function() {
    it("should return true if account number is valid", function() {
        var number = 7992739871;
        var result = check(number);
        assert.isTrue(result);
    });

    it("should return false if account number is NOT valid", function() {
        var number = 7992739872;
        assert.isFalse(check(number));
    });
});