const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
    it('should call calculateNumber', function() {

        const consoleSpy = sinon.spy(Utils);
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calculateNumber.callCount).to.equal(1);
        consoleSpy.calculateNumber.restore();
    });
});

