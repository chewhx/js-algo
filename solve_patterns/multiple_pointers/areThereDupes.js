function areThereDupes(...args) {
  args.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  // Window (0,1) indices
  let p1 = 0;
  let p2 = 1;
  while (p2 < args.length) {
    const n1 = args[p1];
    const n2 = args[p2];

    if (n1 === n2) {
      return true;
    }

    if (n1 !== n2) {
      p1++;
      p2++;
    }
  }
  return false;
}

module.exports = areThereDupes;
