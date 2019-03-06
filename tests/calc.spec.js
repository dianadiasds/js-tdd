var expect = require('chai').expect;
var calc = require('../src/main.js');

describe('Calc', function () {

    // Smoke tests
    describe('Smoke tests', function () {
        it('Should exist Calc lib', function () {
            expect(calc).to.exist;
        });

        it('Should exist a method `sun`', function () {
            expect(calc.sun).to.exist;
            expect(calc.sun).to.be.a('function');
        });

        it('Should exist a method `div`', function () {
            expect(calc.div).to.exist;
            expect(calc.sun).to.be.a('function');
        });

        it('Should exist a method `mult`', function () {
            expect(calc.mult).to.exist;
            expect(calc.sun).to.be.a('function');
        });

        it('Should exist a method `sub`', function () {
            expect(calc.sub).to.exist;
            expect(calc.sun).to.be.a('function');
        });

    });
    // Sun
    describe('Sun', function () {
        it('Should return 4 when `sun(2,2)`', function () {
            expect(calc.sun(2,2)).to.be.equal(4);
        })
    });

    // Div
    describe('Div', function () {
        it('Should return 1 when `div(2,2)`', function () {
            expect(calc.div(2,2)).to.be.equal(1);
        });
        it('Should return `cant divide by zero` when divided by 0', function () {
            expect(calc.div(2,0)).to.be.equal('cant divide by zero');
        })
    });

    // Mult
    describe('Mult', function () {
        it('Should return 4 when `mult(2,2)`', function () {
            expect(calc.mult(2,2)).to.be.equal(4);
        })
    });
    // Sub
    describe('Sub', function () {
        it('Should return 0 when `sub(2,2)`', function () {
            expect(calc.sub(2,2)).to.be.equal(0);
        })
    });
});