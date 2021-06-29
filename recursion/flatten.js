function flatten(array, memo = []) {
  if (!array || array === undefined) return undefined;
  if (!array.length) return undefined;

  array.forEach((each) => {
    if (typeof each !== "object") {
      memo.push(each);
    }
    flatten(each, memo);
  });
  return memo;
}

module.exports = flatten;
