const expect = require('chai').expect;
const isTruthy = require('./libs');

describe('isTruthy', function () {

  it('to.be.falsy', () => {
    expect(isTruthy({})).to.equal(false);
    expect(isTruthy([])).to.equal(false);
    expect(isTruthy(null)).to.equal(false);
    expect(isTruthy(undefined)).to.equal(false);
    expect(isTruthy('')).to.equal(false);
    expect(isTruthy(false)).to.equal(false);
    expect(isTruthy(null)).to.equal(false);
    expect(isTruthy(undefined)).to.equal(false);
    expect(isTruthy(0)).to.equal(false);
    expect(isTruthy(NaN)).to.equal(false);
  })
  it('to.be.truthy', () => {
    expect(isTruthy('a')).to.equal(true);
    expect(isTruthy(1)).to.equal(true);
    expect(isTruthy([1])).to.equal(true);
    expect(isTruthy({ a: 1 })).to.equal(true);
    expect(isTruthy(true)).to.equal(true);
  })

})