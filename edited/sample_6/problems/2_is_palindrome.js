/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

// Good job breaking down the problem into components! -MK
// Can you think of an easier way to remove spaces? (hint: split() and join()) -MK
function noSpace(sentence) {
  var noSpaceWord = '';

  for (e = 0; e < sentence.length; e += 1) { // remember to declare the variable here! ex: for(var e = 0; ...) -MK
    var words = sentence[e];

    if ( words === ' ') {
      continue;
                // this empty space isn't required, and breaks up your conditional unneccessarily -MK
    } else {
       noSpaceWord += words;
    }
  }
  return noSpaceWord;
}

function isPalindrome(sentence) {
   var InvertWord = '';
   var noSpaceWord = noSpace(sentence);

  for (var i = noSpaceWord.length -1 ; i >= 0; i -= 1){
    var word = noSpaceWord[i]; // var word here is assigned to a single letter. a bit confusing, no? ;) -MK
    InvertWord += word;
  }

  return (InvertWord === noSpaceWord);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = isPalindrome;
