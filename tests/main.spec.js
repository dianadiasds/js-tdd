var expect = require('chai').expect;

describe('Main', function () {
    var arr;
    describe('Method A', function () {

        context('Case 1', function () {
            it('should happen', function () {

            });
        });

        context('Case 2', function () {
            it.skip('should happen', function () {

            });
        });

    });
    // pass one time, before the block
    before(function () {
        // start a conection with database
        // create a dataset
    });
    // pass one time, after the block
    after(function () {
        // close a conection with database
        // delete this dataset
    });
    // pass every time, before each block
    beforeEach(function () {
        arr = [ 1, 2, 3];
    });
    // pass every time, after each block
    afterEach(function () {

    });
    //smoke test
    it('should be an array', function () {
        expect(arr).to.be.a('array');
    });

    it('should have a size of 4 when push another value to the array', function () {
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should remove the value 3 when use pop in the array', function () {
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('should have a size of 2 when pop a value from the array', function () {
        arr.pop();
        expect(arr).to.have.lengthOf(2);
    });
});