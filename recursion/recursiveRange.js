function recursiveRange(num) {
  if (typeof num !== "number" || num === undefined) {
    return undefined;
  }
  if (num === 0) return 0;
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
}

module.exports = recursiveRange;
