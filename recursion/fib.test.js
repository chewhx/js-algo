const fib = require("./fib");

const seq = [([4, 3], [10, 55], [28, 317811], [35, 9227465])];

seq.forEach((each) => {
  test(`Fibonnaci number at position ${each[0]}`, () => {
    expect(fib(each[0])).toBe(each[1]);
  });
});
