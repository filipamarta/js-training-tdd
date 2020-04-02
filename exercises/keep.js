'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) => {
    return str.substring(0, 2);
};

const keepLast = (str) => {
    return str.substring(str.length-2, str.length);
};

const keepFirstLast = (str) => {
    return str.substring(2, 4);
};
//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.deepStrictEqual(keepFirst('abc'), 'ab');
assert.deepStrictEqual(keepFirst('a1c'), 'a1');
assert.deepStrictEqual(keepFirst('a1cdef'), 'a1');
assert.deepStrictEqual(keepFirst('wol.lol'), 'wo');

assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast.length, 1);
assert.deepStrictEqual(keepLast('abc'), 'bc');
assert.deepStrictEqual(keepLast('a1c'), '1c');
assert.deepStrictEqual(keepLast('a1cdef'), 'ef');
assert.deepStrictEqual(keepLast('wol.lol'), 'ol');

assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirstLast.length, 1);
assert.deepStrictEqual(keepFirstLast('abcde'), 'cd');
assert.deepStrictEqual(keepFirstLast('a1cde'), 'cd');
assert.deepStrictEqual(keepFirstLast('a1cdef'), 'cd');
assert.deepStrictEqual(keepFirstLast('wol.lol'), 'l.');
// End of tests */
