const validate = require("aproba");

function areThereDupes(...args) {
  const memo = [];
  // Use the arguments object which is already a counter
  // E.g. [Arguments] { '0': 1, '1': 2, '2': 3, '3': 3, '4': 4 }
  for (let each of Object.values(arguments)) {
    if (memo[each]) {
      return true;
    }
    if (!memo[each]) {
      memo[each] = 1;
    }
  }
  return false;
}

module.exports = areThereDupes;