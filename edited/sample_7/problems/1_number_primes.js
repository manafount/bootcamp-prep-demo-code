/* 
  Hey ____,

  Great job! 3/4 specs are passing!

  Your code is nice and clean, and I like that you leave comments as reminders for yourself! That's a great habit to get into. -MK

  It seems like you weren't too sure about your previous_prime_array code. It passed the specs, but you were missing a tiny piece
  of logic. A good habit to get into is testing the output of your code (either with console.log or with a debugger).

  Your code for longest_letter streak was impressive! Unfortunately, you didn't solve the right problem. Just make sure you
  read the instructions carefully next time!

  You can find my comments on lines ending with -MK

*/
/*******************************************************************************
Write a function numberPrimes(n) that takes in a number, `n`. The function should
return the number of prime numbers less than or equal to `n`. For example,
there are 4 prime numbers less that or equal to 10: 2, 3, 5, 7.

Examples:

numberPrimes(10); // => 4
numberPrimes(12); // => 5
numberPrimes(20); // => 8
numberPrimes(100); // => 25
*******************************************************************************/

function isPrime(n) {
  // try to use a more descriptive name for 'n' such as 'num' or 'number' -MK
  if (i < 2) { // oops! 'i' should be 'n' here. that said, this code will never be run since numberPrimes will never pass a number less than 2 to this helper function -MK
    return false;
  }
  var i = 2; // always declare variables at the top of the function, otherwise they may be undefined when you try to use them -MK
  while (i < n) { // any reason to use a while loop instead of a for loop here? -MK
    if (n % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

function numberPrimes(n) {
  // perfect! -MK
  var count = 0;
  for (var i = 2; i < n; i++) {
    var num = i;
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = numberPrimes;
