/*

Hey ___!

Great job! 7/10 specs are currently passing for your assessment.
It seems like you have no problems with loops and arrays. Your isPrime and firstAndLast
functions were misnamed, though! Next time slow down a bit and make sure your tests aren't being
blocked by silly naming errors.

You can find my comments on lines ending with '-MK'.

*/
/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
  var result = [];
  for (var i = end -1; i> start; i -= 1) { // Good! You can also use the decrement operator (ex: i--) in place of i-=1 -MK
    result.push(i);
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseRange;
