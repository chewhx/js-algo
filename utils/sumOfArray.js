const sumOfArray = (arr) => {
  if (arr === undefined) return undefined;
  if (!arr.length || typeof arr === "string") return undefined;
  if (arr.length === 2) return arr[0] + arr[1];

  return arr.shift() + sumOfArray(arr);
};

module.exports = sumOfArray