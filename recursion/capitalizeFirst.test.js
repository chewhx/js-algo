const capitalizeFirst = require("./capitalizeFirst");

const seq1 = [
  [
    ["car", "taco", "banana"],
    ["Car", "Taco", "Banana"],
  ],
  [
    ["jeans", "crayons", "poco"],
    ["Jeans", "Crayons", "Poco"],
  ],
  [[], []],
];

seq1.forEach((each) => {
  test(`Capitalise each word in ${each[0]}`, () => {
    expect(capitalizeFirst(each[0])).toEqual(each[1]);
  });
});

const seq2 = [
  [undefined, undefined],
  [null, undefined],
  [[12, 3, 4], undefined],
  [[12, "string", 4], undefined],
];

seq2.forEach((each) => {
  test(`Capitalise each word in ${each[0]} - should be undefined`, () => {
    expect(capitalizeFirst(each[0])).toBeUndefined();
  });
});
