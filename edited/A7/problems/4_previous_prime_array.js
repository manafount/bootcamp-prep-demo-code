/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/

function previousPrimeArray(array) {
  // your code here...
  let result = [];

  array.forEach(element => {
    if (isPrime(element)) {
      result.push(previousPrime(element));
    }else{
      result.push(element);
    }
  });
  return result;
}

function previousPrime(num) {
  if (num <= 2) return null;
  
  let prev = 2;

  for(let i = 2; i < num; i++) {
    if (isPrime(i)) {
      prev = i;
    }
  }
  return prev;
}

function isPrime(num) {
  for(let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = previousPrimeArray;
