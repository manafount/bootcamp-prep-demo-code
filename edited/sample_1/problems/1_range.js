/*

Hey ___!

Good work! 3/7 specs are currently passing for your assessment.
You have a good grasp on fundamentals, and with a little adjustment 
we can get those last few specs to pass.

You can find my comments on lines ending with '-MK'.

*/
/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

function range (start, end) {
  var result = [];
   for ( var i = start; i<= end; i +=1){
    var iteration = i; // This works, but is reassigning i to iteration strictly necessary? -MK
    result.push(iteration);
   }
   return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = range
