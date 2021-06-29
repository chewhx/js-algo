const sumOfArray = (arr) => {
  if (arr === undefined) return undefined;
  if (!arr.length || typeof arr === "string") return null;
  if (arr.length === 2) return arr[0] + arr[1];

  return arr.shift() + sumOfArray(arr);
};

function maxSubarraySum(arr, num) {
  if (!arr || !num || arr === undefined) return undefined;
  if (typeof arr !== "object" || typeof num !== "number") return undefined;
  if (!arr.length) return null;
  if (arr.length === 1) return arr[0];

  // Array only, find the max only, no need window
  if (num === 1) {
    let max = 0
    arr.forEach(each => {
      if (each > max) {
        max = each
      }
    })
    return max
  }

  // Array more than 1
  if (num > 1) {
    let left = 0;
    let right = num;
    let max = 0;
    while (right < arr.length) {
      const newSum = sumOfArray(arr.slice(left, right));
      if (newSum > max) max = newSum;
      left++;
      right++;
    }
    return max;
  }
}

module.exports = maxSubarraySum;
