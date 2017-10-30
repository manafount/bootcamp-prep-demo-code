/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
  // This is a bit nitpicky, but try to use camelCase when naming variables. breakup => breakUp, for example -MK
  var breakup = sentence.split(" ");
  var newsentence = [];
  while (breakup.length > 0) {
    newsentence.push(breakup.pop()); // Great use of the push and pop array methods! -MK
  }
  return newsentence.join(" ");
}

//Wasn't exactly sure how to limit movement towards infinity so I googled
// and looked at the use of pop from early notes.


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseSentence
