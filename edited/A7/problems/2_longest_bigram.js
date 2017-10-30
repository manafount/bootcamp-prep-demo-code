/*******************************************************************************
Write a function longestBigram(sentence) that takes in a sentence string and returns
the longest bigram in the sentence. A bigram is a pair of consecutive words.
When returning the bigram, include the space between the words.
Assume there will be no punctuation. In the case of a tie, return the earlier bigram.

Examples:

longestBigram('measure twice cut once'); // => 'measure twice'
longestBigram("One must have a mind of winter"); // => 'must have'
longestBigram("go home to eat"); // => 'go home'
longestBigram("his last assessment is fun"); // => 'last assessment'
*******************************************************************************/

function longestBigram(sentence) {
  // your code here...
  let longest = '';
  let wordsArr = sentence.split(' ');
  let bigrams = getBigrams(wordsArr);

  for(let i = 0; i < bigrams.length; i++) {
    if (bigrams[i].length > longest.length) {
      longest = bigrams[i];
    }
  }
  return longest;
}

function getBigrams(arr) {
  let bigrams = [];
  for (let i = 0; i < arr.length - 1; i++) {
    bigrams.push(arr[i] + ' ' + arr[i+1]);
  }
  return bigrams;
} 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = longestBigram;
