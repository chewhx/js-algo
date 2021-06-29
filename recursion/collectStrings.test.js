const collectStrings = require("./collectStrings");

const seq1 = [
  [
    {
      stuff: "foo",
      data: {
        val: {
          thing: {
            info: "bar",
            moreInfo: {
              evenMoreInfo: {
                weMadeIt: "baz",
              },
            },
          },
        },
      },
    },
    ["foo", "bar", "baz"],
  ],
];

seq1.forEach((each) => {
  test(`Collect strings, to be [${each[1]}]`, () => {
    expect(collectStrings(each[0])).toEqual(each[1]);
  });
});
