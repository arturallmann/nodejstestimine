const sum = require('./sum');
const assert = require('assert');

describe('expect', () => {
    test('adds 1 + 2 to equal 3', () =>{
        expect(sum(1, 2)).toBe(3);
    })
})


describe('assert', () => {
    test('adds 1 + 1 to equal 2', () =>{
        assert.equal(sum(1, 1), 2);
    })

})

