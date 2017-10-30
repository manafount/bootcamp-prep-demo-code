/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  var result = [];
  /*
   In your for loop, i < array.length-1; should either be:
    i < array.length; 
      or
    i <= array.length-1;
  
    Currently, your code will only access up to the second-to-last element of the array.
    -MK
  */
  for ( var i = 0; i < array.length-1; i +=1) {
    var inside = array[i];
    if ( result.indexOf(inside) === -1) {
    result.push(inside);
    }
  }
  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique
