const capitalizeWords = require("./capitalizeWords");

const seq1 = [
  [
    ["i", "am", "learning", "recursion"],
    ["I", "AM", "LEARNING", "RECURSION"],
  ],
];

seq1.forEach((each) => {
  test(`Capitalise all words in ${each[0]}`, () => {
    expect(capitalizeWords(each[0])).toEqual(each[1]);
  });
});
