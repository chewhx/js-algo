const validate = require("aproba");

function counter(arr, memo = {}) {
  validate("A", arguments);

  arr.forEach((each) => {
    if (typeof each === "object") return undefined;
    if (memo[each]) {
      memo[each] += 1;
      return;
    }
    memo[each] = 1;
  });
  return memo;
}

module.exports = counter;
