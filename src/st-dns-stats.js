import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const all = [];

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.').reverse(); //[ru, yandex, code]
    console.log(domain);
    for (let j = 0; j < domain.length; j++) {
      let partDomain = '';
      if (j !== 0) {
        console.log(j);
        partDomain = domain.slice(0, j + 1).join('.');
        console.log(partDomain);
      } else {
        partDomain = domain[j];
        console.log(partDomain);
      }
      all.push(`.${partDomain}`);
    }
  }

  console.log(all);
  return all.reduce((res, item) => {
    res[item] = (res[item] || 0) + 1;
    return res;
  }, {});
}
