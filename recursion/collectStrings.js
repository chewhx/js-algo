function collectStrings(object, memo = []) {
  if (!object || object === undefined || typeof object !== "object") {
    return undefined;
  }

  for (let each of Object.values(object)) {
    if (typeof each === "string") {
      memo.push(each);
    }
    if (typeof each === "object") {
      collectStrings(each, memo);
    }
  }
  return memo;
}

module.exports = collectStrings;
