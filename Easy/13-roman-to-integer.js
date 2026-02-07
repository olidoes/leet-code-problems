/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman_numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let currentNum = 0;

  s.array.forEach((element, index) => {
    if (roman_numerals[s[index - 1]]);
  });

  return currentNum;
};

console.log(romanToInt("MCMXCIV"));
