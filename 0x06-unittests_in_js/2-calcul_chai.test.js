
const calculateNumber = require("./2-calcul_chai");
const expect = require("chai").expect

describe("calculateNumber", () => {
    it("Two integers", () => expect(calculateNumber('SUM',2.2, 2),
     "Add integers").to.notEqual(0));
});

