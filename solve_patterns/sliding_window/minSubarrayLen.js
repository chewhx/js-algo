const validate = require("aproba");
const sumOfArray = require("../../utils/sumOfArray");

function minSubarrayLen(arr, num) {
  validate("AN", arguments);

  if (arr.some((el) => el >= num)) {
    return 1;
  }

  // Sliding window indices
  let p1 = 0;
  let p2 = arr.length + 1;
  let ans_arr = [];

  while (p2 > p1) {
    ans_arr = arr.slice(p1, p2);

    const sum_ans_arr = sumOfArray([...ans_arr]);

    if (sum_ans_arr < num) {
      return 0;
    }
    if (sum_ans_arr >= num) {
      const n1 = ans_arr[0];
      const n2 = ans_arr[ans_arr.length - 1];

      if (sum_ans_arr - n1 < num && sum_ans_arr - n2 < num) {
        return ans_arr.length;
      }

      if (n1 < n2 || n1 === n2) {
        p1++;
      }
      if (n1 > n2) {
        p2--;
      }
    }
  }
}

module.exports = minSubarrayLen;
