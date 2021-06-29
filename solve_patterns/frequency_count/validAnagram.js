const counter = require("./counter");
const validate = require("aproba");

function validAnagram(word1, word2) {
  validate("SS", arguments);
  // if (word1 === undefined || word2 === undefined) return undefined;
  if (!word1 && !word2) return true;
  if (word1 && !word2) return false;
  if (!word1 && word2) return false;
  if (word1 === word2) return true;
  // if (
  //   typeof word1 !== "string" ||
  //   typeof word2 !== "string" ||
  //   word1.length !== word2.length
  // )
  //   return undefined;

  const freq_word1 = counter(word1.split(""));
  const freq_word2 = counter(word2.split(""));

  for (let [key, value] of Object.entries(freq_word1)) {
    if (freq_word2[key]) {
      if (value === freq_word2[key]) {
        return true;
      }
      return false;
    }
  }
}

module.exports = validAnagram;
