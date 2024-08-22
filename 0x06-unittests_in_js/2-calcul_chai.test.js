
const calculateNumber = require("./2-calcul_chai");
const expect = require("chai").expect

describe("calculateNumber", () => {
    it("Two integers", () => expect(calculateNumber('SUM', 2.2, 2)).to.notEqual(0));
    it("Two integers", () => expect(calculateNumber('SUM', 2.2, 2)).to.notEqual(0));
    it("Two integers", () => expect(calculateNumber('SUM', 2.2, 10.9)).to.deepStrictEqual(13));
    it("Subtraction", () => expect(calculateNumber(calculateNumber('SUBTRACT', 4, 3.3)).to.equal(1)));
    it("Subtraction", () => expect(calculateNumber('SUBTRACT', 2, 5.3)).to.notEqual(4));
    it("Subtraction", () => expect(calculateNumber('SUBTRACT', 9.2, 5.3)).to.equal(4));
    it("Subtraction", () => expect(calculateNumber('SUBTRACT', 9.2, 10.3)).to.equal(-1));
    it("Subtraction", () => expect(calculateNumber('SUBTRACT', 5, 8)).to.equal(-3));
    it("Division of Integers", () => expect(calculateNumber('DIVIDE', 4, 3.7)).to.notEqual(8));
    it("Division of Integers", () => expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2));
    it("Division of Integers", () => expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal(0));
    it("Division of Integers", () => expect(calculateNumber('DIVIDE', -4.4, 2)).to.equal(-2));
    it("Division of Integers", () => expect(calculateNumber('DIVIDE', 45.2, 2)).to.notEqual(45));
    it("Division of Integers", () => expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error'));

});

