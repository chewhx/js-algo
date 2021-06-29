function countUniqueValues(arr) {
  if (!arr || arr === undefined) return undefined;
  if (typeof arr !== "object") return undefined;
  if (!arr.length) return 0;
  if (arr.length === 1) return 1;
  if (arr.length > 1) {
    // Pointers are indices on the array
    let p1 = 0;
    let p2 = 1;
    let counter = 1;

    while (p2 < arr.length) {
      const n1 = arr[p1];
      const n2 = arr[p2];
      // If values of both pointers are the same, increase pointer2
      if (n1 === n2) {
        p2++;
      }
      // If values of both pointers are different, move pointer1 and increase pointer2, increment counter
      if (n1 !== n2) {
        p1 = p2;
        p2++;
        counter++;
      }
    }
    return counter;
  }
}

module.exports = countUniqueValues;
