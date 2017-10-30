/*******************************************************************************
Write a function magicNumbers(max) that returns an array of numbers up to
the max. Each number should be either divisible by 4 or 6, BUT NOT BOTH.

Example:

magicNumbers(20) => [4, 6, 8, 16, 18]
*******************************************************************************/

function magicNumbers(max) {
  // your code here...
  let result = [];
  
    for(let i=0; i<max; i++) {
      if (i % 4 === 0 && i % 6 === 0) { 
        continue;
      }else if(i % 4 === 0 || i % 6 === 0) {
        result.push(i);
      }
    }
  
    return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicNumbers;
