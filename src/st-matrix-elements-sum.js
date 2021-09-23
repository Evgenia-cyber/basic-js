import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  const array = matrix.flat();
  const period = matrix[0].length;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      for (let j = i; j < array.length; j = j + period) {
        array.splice(j, 1, 0);
      }
    }
  }
  return array.reduce((sum, item) => sum + item);
}
