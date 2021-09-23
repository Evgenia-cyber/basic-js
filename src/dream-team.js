import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const strings = members.filter((item) => typeof item === 'string');
  const letters = strings.reduce((arr, item) => {
    const newItem=item.trim();
    arr.push(newItem[0].toUpperCase());
    return arr;
  }, []);
  return letters.sort().join('');
}
