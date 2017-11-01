/*******************************************************************************
Write a function longestLetterStreak(str, searchLetters) that takes in 2 arguments:
 - str: A string of uppercase characters.
 - searchLetters: An array of uppercase single-character strings (i.e ["A", "F", "K"])

The function should return the length of the longest streak of letters (consecutive
letters) in the `str` that are in the `searchLetters`.

Note that a streak does not have to consist of the same letter repeated, a streak
just needs to contains letters from the `searchLetters` array.

Examples:

longestLetterStreak("ACCA", ["C"]); // => 2
longestLetterStreak("YACCADCA", ["C", "A"]); // => 4
longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"]); // => 3
longestLetterStreak("YYYYY", ["Z", "K", "Y"]); // => 5
*******************************************************************************/

/* 
  Your code here is good for the most part, but it looks like you might have misread the problem.
  The problem is asking for the longest STREAK of letters that match any of the letters included in the
  letter array. Your program seems like it's trying to find the most frequently used letter that is also
  part of the letter array. Make sure you read carefully, and test your code against some of the included
  sample cases! -MK
*/
function longestLetterStreak(str, searchLetters) {
  var obj = {};
  var highest = [];

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (searchLetters.indexOf(char) > -1) {
      obj[char] += 1; // oops! if obj[char] is undefined, adding 1 to it will give you 'NaN' -MK
      /* One way to fix that would be to assign obj[char] = 1 if this is the first time we've seen that letter:
      if (obj[char]) {
        obj[char] += 1;
      } else {
        obj[char] = 1;
      }
      */
    }
  }
  for (key in obj) {
    highest.push(obj[key]);
  }
  var high = 0; 
  /* I know it's tempting to keep related code together, but we really should keep all variable declarations
    at the top of the function in javascript. This is because of something javascript does called 'hoisting'
    of variables. What you wrote is essentially equal to this:

    function longestLetterStreak(str, searchLetters) {
      var obj = {};
      var highest = [];
      var high;
      for(...){ 
      }
      for(...) {
      }
      high = 0;
      ...
    }

    See what happened? Javascript 'hoisted' the declaration to the top of the function at runtime, but assigned the value
    of 0 to it where we usually think that the variable is being declared. This can cause some pretty confusing errors, so it's
    best to just always declare variables at the top of a function (or block of code). -MK
  */
  for (var i = 0; i < highest.length; i++) {
    var num = highest[i];
    if (num > high) {
      high = num;
    }
  }
  return high;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestLetterStreak;
