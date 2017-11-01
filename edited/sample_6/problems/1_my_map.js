/* 
  Hey ____,

  Great job! 4/5 specs are passing, and you were very close to getting problem 3 correct!

  You write good, clean code. You're also breaking down problems into multiple component functions. Good job!

  There were a few style inconsistencies, as well as one or two easy mistakes which may have just been typos. 
  Remember to take your time and test your code as you go and you'll be perfect!

  You can find my comments on lines ending with -MK

*/
/*******************************************************************************
Write a function `myMap(arr, cb)` that accepts an array and a callback. It should
pass each element, its corresponding index, and the array itself to the callback.
Do not use the built in `Array.prototype.map` method. It should return an array
where each element is the return value of the callback given the element in the
corresponding position. See the examples.

Examples:

myMap([9, 25, 100, 36, 81], Math.sqrt); // => [ 3, 5, 10, 6, 9 ]

function multiply(num1, num2) {
  return num1 * num2;
}

myMap([2, 4, 6, 6], multiply); // => [ 0, 4, 12, 18 ]
*******************************************************************************/
// Perfect! Very clean code! -MK
function multiply(num1, num2) {
  return num1 * num2;
}

function myMap(arr, cb) {
  var newArr = [];

  for (var i = 0; i < arr.length; i += 1) { // You could also use 'i++' to increment, in place of 'i+=1' -MK
    var num = arr[i];
    newArr.push(cb(num, i, arr));
  }
  return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myMap;
