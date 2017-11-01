/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/
// don't know how to get the prime before n
// you did fine! your isEarlierPrime function is (almost) perfect! -MK
function isEarlierPrime(n) {
    for (var i = n - 1; i > 1; i--) {
      if (isPrime(i) === true) {
        return i;
      break; // this break statement is unnecessary, since 'return' automatically breaks out of a function and stops execution -MK
    } // make sure this end to your conditional is on the same indentation as the start of the conditional (if (...) {) -MK
  }
  /*
   The one thing your code is missing is 'return null' at the end, here.
   See how the instructions want the number to be replaced with 'null' if there isn't an earlier prime?
   Right now your function doesn't return anything (ie: undefined) if the return statement inside of your conditional
   isn't triggered. -MK
  */
}

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  var i = 2;
  while (i < n) { // 'while' loops may be more familiar to you, but you should really get into the habit of using 'for' loops! -MK
    if (n % i === 0) {
      return false;
    }
    i++;
  }
  return true;; // oops! one too many semicolons here -MK
}

function previousPrimeArray(array) {
  // I appreciate the comments, but try to be a bit more explicit. Your comment below doesn't make much sense for code that just declares an empty array variable ;) -MK
  var newArr = []; //each prime replaced with one before
  for (var i = 0; i < array.length; i++) {
    var num = array[i];
    if (isPrime(num) === false) {
      newArr.push(num);
    } else {
      newArr.push(isEarlierPrime(num));
    }
  }
  return newArr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
