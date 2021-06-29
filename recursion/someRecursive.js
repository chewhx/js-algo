function someRecursive(arr, cb) {
  if (arr === undefined || cb === undefined) return undefined;
  if (!arr.length) return;
  if (arr.length > 1) {
    return cb(arr[0]) || someRecursive(arr.splice(1), cb) || false;
  }
  return cb(arr[0]);
}

module.exports = someRecursive;
