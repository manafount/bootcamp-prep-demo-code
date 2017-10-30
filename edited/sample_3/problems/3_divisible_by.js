/*******************************************************************************
Write a function divisibleByFivePairSum(array), that takes an array of numbers.
It should return an array of all the pairs of indices whose sum is a multiple of five.

Examples:

divisibleByFivePairSum([1, 5, 2, 0, 4]); // => [ [ 0, 4 ], [ 1, 3 ] ]
divisibleByFivePairSum([13, 22, 8, -3, 12]); // => [[ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 1, 2 ], [ 2, 3 ], [ 2, 4 ]]
*******************************************************************************/

  function divisibleByFivePairSum(array){
  var newArr = [];

  for(var i = 0; i < array.length; i += 1){

    for(var e = i + 1; e < array.length; e += 1){
      var sum = array[i] + array[e];

      if(sum % 5 === 0){
        newArr.push([i, e]);

      }
    }
  } return (newArr);
}

/*
Great work!
Try to work on your code style, though. The function declaration is again
indented unnecessarily. This can trick you into thinking the code that follows it
is outside of its scope. Also, use empty lines to block off complete logical operations.

For instance:

  for(var i = 0; i < array.length; i += 1){

    for(var e = i + 1; e < array.length; e += 1){
      var sum = array[i] + array[e];

      if(sum % 5 === 0){
        newArr.push([i, e]);

      }
    }
  } return (newArr);

  becomes:

  for(var i = 0; i < array.length; i += 1){

    for(var e = i + 1; e < array.length; e += 1){
      var sum = array[i] + array[e];

      if(sum % 5 === 0){
        newArr.push([i, e]);
      }

    }
  } return (newArr);

  Your inner conditional now has padding around it. The loop enclosing that conditional also has padding around it, now. -MK
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = divisibleByFivePairSum
