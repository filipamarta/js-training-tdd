'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
const yell = (str) => {
    return str.toUpperCase();
};
//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.deepStrictEqual(yell('abc'), 'ABC');
assert.deepStrictEqual(yell('a1c'), 'A1C');
assert.deepStrictEqual(yell('a1cdef'), 'A1CDEF');
assert.deepStrictEqual(yell('wol.lol'), 'WOL.LOL');

// End of tests */
