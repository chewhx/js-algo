const counter = require("./counter");
const validate = require("aproba");

function sameFrequency(num1, num2) {
  validate("NN", arguments);
  if (String(num1).length !== String(num2).length) return false;

  const freq_num1 = counter(String(num1).split(""));
  const freq_num2 = counter(String(num2).split(""));

  for (let [key, value] of Object.entries(freq_num1)) {
    if (freq_num2[key]) {
      if (value === freq_num2[key]) {
        return true;
      }
      return false;
    }
    if (!freq_num2[key]) {
      return false;
    }
  }
}

module.exports = sameFrequency;
