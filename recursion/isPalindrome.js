const reverse = require("./reverse");

function isPalindrome(string) {
  if (string === undefined) return undefined;
  if (!string.length || typeof string !== "string") return undefined;

  const reversed = reverse(string);

  const helper = (string1, string2) => {
    if (!string1.length || !string2.length) return;
    if (string1[0] === string2[0]) {
      helper(string1.slice(1), string2.slice(1));
      return true;
    }
    return false;
  };

  return helper(string, reversed);
}

module.exports = isPalindrome;
