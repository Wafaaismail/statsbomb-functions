var assert = require('assert');
var median = require('./');

describe("Median calculation", function () {
  it("should return expected values", function () {

    var data1 = [35, 20, 15, 50, 40];
    var data2 = [3, 6, 7, 15, 16, 11, 13, 8, 8, 20];
    var data3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

    assert.equal(median.calc(data1), 35);
    assert.equal(median.calc(data2), 9.5);
    assert.equal(median.calc(data3), 5);
  });
});
