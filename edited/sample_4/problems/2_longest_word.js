/*******************************************************************************
Write a function longestWord(sentence) that retuns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('app academy is cool'); // => 'academy'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) {
  var longWord = '';
  for (var i = 0; i < sentence.length; i++) {
    var word = sentence[i]; // sentence[i] refers to the letter at position `i` in `sentence` -MK
    if (word.length > longWord.length ) { // word.length will always = 1, as you're only getting 1 letter at a time -MK
      longWord += word; // if the new word is longer, we want to set longWord equal to word, not concatenate them -MK
    }
  }
  return longWord;
}

/*
Close! But you forgot to split the sentence into words. You could accomplish that by using the String.split method.
Make sure you test carefully. If you need to, use console.log to print out values and see what your function is returning. -MK
*/

console.log(longestWord('app academy is cool')); // => 'academy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestWord;
