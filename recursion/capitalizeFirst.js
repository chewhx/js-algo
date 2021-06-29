function capitalizeFirst(arr, memo = []) {
  if (!arr || arr === undefined) return undefined;
  if (!arr.length) return memo;
  if (typeof arr[0] !== "string") return undefined

  const firstWord = arr[0];
  const capFirstWord = firstWord[0].toUpperCase() + firstWord.slice(1);

  memo.push(capFirstWord);

  return capitalizeFirst(arr.slice(1), memo);
}

module.exports = capitalizeFirst;
