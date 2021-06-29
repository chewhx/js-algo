function stringifyNumbers(object) {
  if (!object || object === undefined || typeof object !== "object")
    return undefined;

  for (let [key, value] of Object.entries(object)) {
    if (typeof value === "number") {
      object[key] = String(value);
    }
    if (typeof value === "object") {
      stringifyNumbers(value);
    }
  }
  return object;
}

module.exports = stringifyNumbers;
