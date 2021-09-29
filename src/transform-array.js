import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  
  if (arr.length === 0) {
    return [];
  }

  // if (!Array.isArray(arr)) {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // }

  // return arr.reduce((res, item, index) => {
  //   if (item === '--discard-prev') res.pop();
  //   if (item === '--discard-next')
  //     if (item === '--double-prev') res.push(arr[index - 1]);
  //   if (item === '--double-next') res.push(arr[index + 1]);
  //   else {
  //     res.push(item);
  //   }
  //   return res;
  // }, []);

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-prev') res.pop();
    else if (arr[i] === '--discard-next') i = i + 2;
    else if (arr[i] === '--double-prev') res.push(arr[i - 1]);
    else if (arr[i] === '--double-next') res.push(arr[i + 1]);
    else if (arr[i] !== undefined) res.push(arr[i]);
  }

  return res.filter((item) => item !== undefined);
}
