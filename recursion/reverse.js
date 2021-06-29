function reverse(string) {
  if (string === undefined || !string) return undefined;
  if (typeof string !== "string" || !string.length) return undefined;
  if (string.length === 1) return string[0];
  const arr = string.split("");
  return arr.pop() + reverse(arr.join(""));
}

module.exports = reverse;
