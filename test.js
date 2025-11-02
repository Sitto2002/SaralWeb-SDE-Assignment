const myModule = require('./merge-module.js');

const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];

console.log(myModule.mergeTimeRanges(ranges, 200));
