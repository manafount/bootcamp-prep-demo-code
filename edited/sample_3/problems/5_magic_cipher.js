/*******************************************************************************
Write a function magicCipher(sentence, cipher) that takes in an string(sentence)
and an object(cipher). Return a string where every character is replaced with its
cooresponding value in the cipher. If the character doesn't exist in the
cipher, use the character.

Examples:

magicCipher("add me on facebook" , { a : "c", d : "q"}) => "cqq me on fccebook"
magicCipher("where are you?" , { v : "l", '?' : "!"}) => "where are you!"
magicCipher("twmce" , { m : "n", t : "d", w : "a"}) => "dance"
*******************************************************************************/

function isObj(obj, key){
  return obj[key] !== undefined;
}

function switchLetter(cipher, letter){
  var newLetter = cipher[letter];
  return newLetter;
}


function magicCipher(sentence, cipher){
  var letters = sentence.split('');
  var newLetters = '';
  var newWord = sentence;

  for(i = 0; i < letters.length; i += 1){ // Don't forget to declare 'i' inside your for loop! -MK
    var letter = letters[i];

     if(isObj(cipher, letter)){ // Nice! Good to see that you're thinking of edge cases and hardening your code. -MK

        newLetters = switchLetter(cipher, letter); // Is this function necessary? See comment below. -MK
        newWord = newWord.replace(letter, newLetters); // You got lucky here. `String.replace` only replaces one character at a time.
     }
  }
  return newWord;
}

/*
Although we always suggest breaking down a problem into smaller helper functions,
you may have been a bit overzealous with switchLetter. It seems to me that it could be replaced by
simply keying into the cipher object:

    if(isObj(cipher, letter)){ 
      var newLetter = cipher[letter];
      newWord = newWord.replace(letter, newLetter);
    }

As mentioned above, the `replace` String method only replaces one letter by default.
You would either need to repeatedly call `replace` until no more of the original letter existed:

  if(isObj(cipher, letter)){ 
    var newLetter = cipher[letter];
    while (newWord.includes(letter)) {
      newWord = newWord.replace(letter, newLetter);
    }
  }

This time you got saved by weak specs. ;) -MK
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = magicCipher;
