function fib(num, memo = [1, 1]) {
  if (typeof num !== "number" || num === undefined) {
    return undefined;
  }
  if (num <= 0) return 0;
  if (memo[num]) return memo[num];
  const ans = fib(num - 1) + fib(num - 2);
  memo[num] = ans;
  return ans;
}

module.exports = fib;
