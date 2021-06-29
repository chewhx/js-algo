function power(base, exponent) {
  if (base === undefined || exponent === undefined) return undefined;
  if (typeof base !== "number" || typeof exponent !== "number")
    return undefined;
  if (exponent === 0) return 1;
  if (exponent === 1) return base;
  return power(base, exponent - 1) * base;
}

module.exports = power;
