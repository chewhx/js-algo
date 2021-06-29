const isEven = (val) => val % 2 === 0;

const sumOfArray = (arr) => {
  if (arr === undefined) return undefined;
  if (!arr.length || typeof arr === "string") return undefined;
  if (arr.length === 2) return arr[0] + arr[1];

  return arr.shift() + sumOfArray(arr);
};

function nestedEvenSum(object, memo = []) {
  if (!object || object === undefined) return undefined;

  const values = Object.values(object);
  values.forEach((each) => {
    if (typeof each === "number" && isEven(each)) {
      memo.push(each);
    }
    if (typeof each === "object") {
      return nestedEvenSum(each, memo);
    }
  });
  return sumOfArray([...memo]);
}

module.exports = nestedEvenSum;
