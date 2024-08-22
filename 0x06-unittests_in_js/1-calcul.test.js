
const calculateNumber = require("./1-calcul")
var assert = require('assert')

describe("calculateNumber", () => {
    it("Two integers", () => assert.notEqual(calculateNumber('SUM',23, 1), 22))
    it("Two integers", () => assert.notEqual(calculateNumber('SUM',2.2, 2), 0))
    it("Integer and floating point", () => assert.equal(calculateNumber('SUBTRACT',4, 3.3), 1))
    it("Integer and floating point", () => assert.equal(calculateNumber('SUBTRACT',9.2, 5.3), 4))
    it("Round float value", () => assert.notEqual(calculateNumber('DIVIDE',4, 3.7), 8))
    it("Round float value", () => assert.equal(calculateNumber('DIVIDE',4, 0), 'Error'))
})
