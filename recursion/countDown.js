function countDown(num, memo = []) {
  if (typeof num !== "number" || num === undefined) {
    return undefined;
  }
  if (num <= 0) {
    return memo;
  }
  memo.push(num);
  return countDown(num - 1, memo);
}

module.exports = countDown;
