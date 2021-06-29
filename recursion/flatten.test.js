const flatten = require("./flatten")

const seq1 = [
  [[1, 2, 3, [4, 5] ], [1,2,3,4,5]],
  [[1, [2, [3, 4], [[5]]]], [1,2,3,4,5]],
  [[[1],[2],[3]], [1,2,3]],
  [[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]], [1,2,3]]
]

seq1.forEach(each => {
  test(`Flatten ${each[0]} — ${each[1]}`, ()=> {
    expect(flatten(each[0])).toEqual(each[1]);
  })
})