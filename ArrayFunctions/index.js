'use strict';

// array functions

// map() usage
const nums = [1,2,3];
const squares = nums.map( el => el *el );

console.log(nums, squares);

// filter() example
const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNums = allNums.filter( el => (el % 2 === 0));
const oddNums = allNums.filter( el => (el % 2 !== 0));

console.log(allNums, evenNums, oddNums);

