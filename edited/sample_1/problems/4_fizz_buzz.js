/******************************************************************************
Write a function fizzBuzz(max) that returns an array of numbers under
the max. Each number should be either divisible by 3 or 5, BUT NOT BOTH.

Example:

fizzBuzz(20) => [3, 5, 6, 9, 10, 12, 18]
*******************************************************************************/

function fizzBuzz(max) {
  var result = [];
  for (var i = 0; i<=max; i+=1) { // In this case, we want an array of numbers *under* the max. So we should iterate until i < max; -MK
      if ((i % 5 === 0 && i % 3 !== 0) || (i% 5 !==0 && i % 3 === 0)){ // Perfect use of logical operators. -MK
      result.push(i);
    }
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = fizzBuzz
