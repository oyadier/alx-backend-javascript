
const calculateNumber = require("./1-calcul")
var assert = require('assert')

describe("calculateNumber", () => {
    it("Two integers", () => assert.notEqual(calculateNumber('SUM',23, 1), 22))
    it("Two integers", () => assert.notEqual(calculateNumber('SUM',2.2, 2), 0))
    it("Two integers", () => assert.deepStrictEqual(calculateNumber('SUM',2.2, 10.9), 13))

    it("Integer and floating point", () => assert.equal(calculateNumber('SUBTRACT',4, 3.3), 1))
    it("Integer and floating point", () => assert.equal(calculateNumber('SUBTRACT',9.2, 5.3), 4))
    it("Integer and floating point", () => assert.notEqual(calculateNumber('SUBTRACT',2, 5.3), -4))
    it("Integer and floating point", () => assert.equal(calculateNumber('SUBTRACT',9.2, 10.3), -1))
    it("Integer and floating point", () => assert.equal(calculateNumber('SUBTRACT',5, 8), -3))
    it("Division of integers", () => assert.notEqual(calculateNumber('DIVIDE',4, 3.7), 8))
    it("Division of integers", () => assert.equal(calculateNumber('DIVIDE',4, 2), 2))
    it("Division of integers", () => assert.equal(calculateNumber('DIVIDE',0, 3.7), 0))
    it("Division of integers", () => assert.equal(calculateNumber('DIVIDE',-4.4, 2), -2))
    it("Division of integers", () => assert.notEqual(calculateNumber('DIVIDE',45.2, 2), 2))
    it("Division of integers", () => assert.equal(calculateNumber('DIVIDE',4, 0), 'Error'))
})
