import { expect } from 'chai';
import {sun, div, mult, sub} from '../src/main';



    // Smoke tests
    describe('Smoke tests', () => {

        it('Should exist a method `sun`', () => {
            expect(sun).to.exist;
            expect(sun).to.be.a('function');
        });

        it('Should exist a method `div`', () => {
            expect(div).to.exist;
            expect(sun).to.be.a('function');
        });

        it('Should exist a method `mult`', () => {
            expect(mult).to.exist;
            expect(sun).to.be.a('function');
        });

        it('Should exist a method `sub`', () => {
            expect(sub).to.exist;
            expect(sun).to.be.a('function');
        });

    });
    // Sun
    describe('Sun', () => {
        it('Should return 4 when `sun(2,2)`', () => {
            expect(sun(2,2)).to.be.equal(4);
        })
    });

    // Div
    describe('Div', () => {
        it('Should return 1 when `div(2,2)`', () => {
            expect(div(2,2)).to.be.equal(1);
        });
        it('Should return `cant divide by zero` when divided by 0', () => {
            expect(div(2,0)).to.be.equal('cant divide by zero');
        })
    });

    // Mult
    describe('Mult', () => {
        it('Should return 4 when `mult(2,2)`', () => {
            expect(mult(2,2)).to.be.equal(4);
        })
    });
    // Sub
    describe('Sub', () => {
        it('Should return 0 when `sub(2,2)`', () => {
            expect(sub(2,2)).to.be.equal(0);
        })
    });
