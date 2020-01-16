import { sum } from './sum';

test('sum will add the sum of two numbers', () => {
  expect(sum(2, 5)).toBe(7);
})