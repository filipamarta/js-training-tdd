'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (str) => {
    return str.substring(2);
} 
const cutLast = (str) => {
    return str.substring(0, str.length-2);
}
const cutFirstLast = (str) => {
    const string1 = str.substring(2);
    const string2 = string1.substring(0, string1.length-2);
    return string2;
}
//* Begin of tests
const assert = require('assert');

//assert.fail('You must write your own tests');
assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.deepStrictEqual(cutFirst('abc'), 'c');
assert.deepStrictEqual(cutFirst('a1c'), 'c');
assert.deepStrictEqual(cutFirst('a1cdef'), 'cdef');
assert.deepStrictEqual(cutFirst('wol.lol'), 'l.lol');

assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutLast.length, 1);
assert.deepStrictEqual(cutLast('abc'), 'a');
assert.deepStrictEqual(cutLast('a1c'), 'a');
assert.deepStrictEqual(cutLast('a1cdef'), 'a1cd');
assert.deepStrictEqual(cutLast('wol.lol'), 'wol.l');

assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);
assert.deepStrictEqual(cutFirstLast('abcde'), 'c');
assert.deepStrictEqual(cutFirstLast('a1cde'), 'c');
assert.deepStrictEqual(cutFirstLast('a1cdef'), 'cd');
assert.deepStrictEqual(cutFirstLast('wol.lol'), 'l.l');
// End of tests */
