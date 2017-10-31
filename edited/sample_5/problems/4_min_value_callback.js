/*******************************************************************************
Write a funtion minValueCallback(array, cb) that takes in an array of numbers and
a callback. The function should call `cb`, passing in the minimum number of the array.
`minValueCallback` should return the return value of `cb`. If the array is empty,
then pass `null` into `cb`.

Examples:

// Math.abs is a built in function to get the absolute value of anumber
var array1 = [-2, -7, 0, 8];
minValueCallback(array1, Math.abs); // => 7

// example cb
function double(n) {
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
minValueCallback(array2, double); // => 18
*******************************************************************************/

function minValueCallback(array, cb) {
  // by now you know what I'm going to say - don't forget your semicolons! -MK
  var min = null // good work! instead of 'null', you could also declare min without a value: `var min;` and test for 'undefined' -MK
  for (var i = 0; i < array.length; i++){
    var num = array[i]
    if (min === null || num < min) {
      min = num
    }
  }
  return cb(min) // this is correct, but in some cases you may want to assign cb(min) to an intermediate variable before returning the value -MK
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minValueCallback;
