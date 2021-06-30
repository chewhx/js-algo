const validate = require("aproba");

function averagePair(arr, num) {
  validate("AN", arguments);
  if (!arr.length) return false;

  // Window indices - p for pointers
  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    const n1 = arr[p1];
    const n2 = arr[p2];
    const average_n1n2 = (n1 + n2) / 2;
    if (average_n1n2 < num) {
      p1++;
    }
    if (average_n1n2 > num) {
      p2--;
    }
    if (average_n1n2 === num) {
      return true;
    }
  }
  return false;
}

module.exports = averagePair;
