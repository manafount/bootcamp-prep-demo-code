/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/

function fizzBuzz(max) {
  // your code here...
  let result = [];

  for(let i = 0; i < max; i++) {
    if (i % 3 === 0 && i % 5 === 0) { 
      continue;
    }else if(i % 3 === 0 || i % 5 === 0) {
      result.push(i);
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz;
