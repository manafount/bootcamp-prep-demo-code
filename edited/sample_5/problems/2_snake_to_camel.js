/*******************************************************************************
Write a function snakeToCamel(str) that takes in a snake_cased string and returns
the string CamelCased. snake_case is a string where each word is separated with
underscores (_). CamelCase is a string where the first char of each word
is capitalized, all other characters lowercase.

Examples:

snakeToCamel('snakes_go_hiss'); // => 'SnakesGoHiss'
snakeToCamel('say_hello_world'); // => 'SayHelloWorld'
snakeToCamel('bootcamp_prep_is_cool'); // => 'BootcampPrepIsCool'
snakeToCamel('BOOtcamp_PREP_iS_cOol'); // => 'BootcampPrepIsCool'
*******************************************************************************/

function snakeToCamel(str) {
  // remember your semicolons! -MK
  var answer = []
  var seperated = str.split('_')
  for (var i = 0; i < seperated.length; i++) {
    var word = seperated[i]
    // answer.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    for (var j = 0; j < word.length; j++) {
      // Good job! Can you think of a way to capitalize the first letter without looping through every letter of the word? -MK
      var letter = word[j] 
        if (j === 0){ // your if statement should start at the same indentation level as your variable declarations -MK
        answer.push(letter.toUpperCase()) // remember to indent code within a block! -MK
        }   else { // 'else' should only have one space between it and the closing brace - MK
            answer.push(letter.toLowerCase())
        }
    }
  }

  return answer.join('')

}

/*
It's fine to pad your discreet code blocks with blank lines, but make sure you do it consistently
throughout your code (ie: one line before and after each 'block' of code). -MK
Here's how I would format your code, if you'd like an example:

function snakeToCamel(str) {
  var answer = [];
  var seperated = str.split('_');

  for (var i = 0; i < seperated.length; i++) {
    var word = seperated[i];

    for (var j = 0; j < word.length; j++) {
      var letter = word[j];

      if (j === 0){
        answer.push(letter.toUpperCase());
      } else {
        answer.push(letter.toLowerCase());
      }

    }

  }

  return answer.join('');
}

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = snakeToCamel;
