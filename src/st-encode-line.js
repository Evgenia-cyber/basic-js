import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const all = str.split('');

  const res = [];

  let count = 1;

  for (let i = 0; i < all.length; i++) {
    if (all[i] === all[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        res.push(count);
      }
      res.push(all[i]);
      count = 1;
    }
  }

  return res.join('');
}
