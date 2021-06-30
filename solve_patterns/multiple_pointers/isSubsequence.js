const validate = require("aproba");

function isSubsequence(string1, string2) {
  validate("SS", arguments);

  // pointer 1 on string 1 and pointer 2 on string 2
  let p_1 = 0;
  let p_2 = 0;

  while (p_2 <= string2.length) {
    const n1 = string1[p_1];
    const n2 = string2[p_2];

    if (n1 === n2) {
      if (p_1 === string1.length - 1) {
        return true;
      }
      p_1++;
      p_2++;
    }

    if (n1 !== n2) {
      p_2++;
    }
  }
  return false;
}

module.exports = isSubsequence;
