/*

Hey ___!

You received a score of 5/7, great job! No points were awarded for myIndexOf, as you used the built-in indexOf method.

In the future, try to slow down a bit. Read the instructions for each problem carefully, and identify the 
tasks you need to perform. 

Also, refer to the JavaScript style guide. Make sure your functions are idented correctly, and
use correct vertical spacing.

You can find my comments on lines ending with '-MK'.

*/

/*******************************************************************************
Write a function myIndexOf(array, ele) that takes an array and an element.
Return the index of the element in the array, or -1 if it doesn't exist. Assume
the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION!

Examples:

myIndexOf([1,2,3,4,5], 5) => 4
myIndexOf(["a", "b", "c"], "a") => 0
myIndexOf(["a", "b", "c"], "d") => -1
*******************************************************************************/

  function myIndexOf(array, ele){
  var index = '';

  for(var i = 0; i < array.length; i += 1){
    index = (array.indexOf(ele)); // The instructions specify that you were not to use the built-in indexOf method -MK

  }
  return index;
}

/* 
Line 27 should not be indented, and line 32 should be omitted.
Try to be consistent with your coding style. It helps to ensure that others (and you) don't get lost! -MK
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = myIndexOf;
