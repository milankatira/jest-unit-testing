const isAnagram = require('./anagram');

test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('Anargram value check', () => {
  expect(isAnagram('milan', 'nalim')).toBeTruthy();
});

test('Truthly anargram', () => {
  expect(isAnagram('Milan', 'nalim/')).toBeTruthy();
});

test('Falsy anargram', () => {
  expect(isAnagram('Milan', 'Anynm')).toBeFalsy();
});