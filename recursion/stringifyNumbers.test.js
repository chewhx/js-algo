const stringifyNumbers = require("./stringifyNumbers");

const seq1 = [
  [
    {
      num: 1,
      test: [],
      data: {
        val: 4,
        info: {
          isRight: true,
          random: 66,
        },
      },
    },

    {
      num: "1",
      test: [],
      data: {
        val: "4",
        info: {
          isRight: true,
          random: "66",
        },
      },
    },
  ],
];

seq1.forEach((each) => {
  test(`Stringify numbers in object`, () => {
    expect(stringifyNumbers(each[0])).toEqual(each[1]);
  });
});
