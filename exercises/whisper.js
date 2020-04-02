'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = (str) => {
    const string = str.toLowerCase();
    return `*${string}*`;
}; 
//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.deepStrictEqual(whisper('ABC'), '*abc*');
assert.deepStrictEqual(whisper('A1C'), '*a1c*');
assert.deepStrictEqual(whisper('A1CDEF'), '*a1cdef*');
assert.deepStrictEqual(whisper('WOL.LOL'), '*wol.lol*');
// End of tests */
