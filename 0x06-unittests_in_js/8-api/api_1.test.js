const request = require('request');
const { expect } = require('chai');

const url = 'http://127.0.0:7865'
describe("Testing api_1",() =>{
    it('Calling endpoint', (done) =>{
        request.get(`${url}`, (req, res)=> {
        expect(res.statusCode).to.be.equal(200)
        expect(res.body).to.be.equal('Welcome to the payment system')
        done()
        })
    })
})

describe("Test Respoond code", () => {
    it("GET cart/:id", (done) =>{
        request.get(`${url}/cart/47`, (req, res) => {
            expect(body).to.be.equal('Payment methods for cart 47');
            done()
        })
    })

    it("GET cart/string", (done) =>{
        request.get(`${url}/cart/string`, (req, res) => {
            expect(res.statusCode).to.be.equal(404)
            done()
        })
    })
    it("GET cart/negative", (done) =>{
        request.get(`${url}/cart/-47`, (req, res) => {
            expect(res.statusCode).to.be.equal(404)
            done()
        })
    })
})