/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function higher(array){
  var high = 0; // What if the array consists only of negative numbers? -MK

  for( var i = 0; i < array.length; i += 1){
    var num = array[i];

    if( high < num){
      high = num;
    }
  }
  return high;
}

function lower(array){
  var low = 1; // What if the array consists only of numbers less than 1? -MK

  for( var i = 0; i < array.length; i += 1){
    var num = array[i];

    if( low > num){
      low = num;
    }
  }
  return low;
}

function minMaxDifference(array){
  /* 
  Good job abstracting out the logic into smaller pieces!
  Can you think of a way to find the highest and lowest numbers
  in only one traversal of the array? If you could, we could eliminate
  one of your functions. -MK
  */
  var maxNum = higher(array);
  var minNum = lower(array);

  return(maxNum - minNum);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = minMaxDifference;
