function capitalizeWords(arr, memo = []) {
  if (!arr || arr === undefined) return undefined;
  if (!arr.length) return undefined;

  const capFirstWord = arr.shift().toUpperCase();
  memo.push(capFirstWord);
  if (arr.length) {
    return capitalizeWords(arr, memo);
  }
  return memo;
}

module.exports = capitalizeWords;
