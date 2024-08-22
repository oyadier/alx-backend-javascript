const calculateNumber = require("./0-calcul")
var assert = require('assert')

describe("calculateNumber", () => {
    it("Two integers", () => assert.notEqual(calculateNumber(23, 1), 8))
    it("Integer and floating point", () => assert.equal(calculateNumber(2, 3.3), 5))
    it("Round float value", () => assert.equal(calculateNumber(4, 3.7), 8))
    it ("Round floating value",() => assert.deepEqual(calculateNumber(2, 3.7), 6))
})
