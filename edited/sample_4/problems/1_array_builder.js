/*

Hey ___!

You scored 3/7. 

You can find my comments on lines ending with '-MK'.

*/

/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({}); //=> []
*******************************************************************************/

/*
So close! It looks like you hit a bug and ran out of time.
All you needed was `array.push(key)` on line 33 and a little code cleanup! -MK
*/

function arrayBuilder(count) {
  var array = [];
  for (var key in count) { // I think using a for-in loop messed you up here. Don't get too fancy! -MK
    var ele = count[i]; // `i` is defined within the scope of the for loop below this, so it will be undefind here -MK
    for (var i = 0; i < count[key]; i++) {
      
    }

    if ()
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = arrayBuilder;
