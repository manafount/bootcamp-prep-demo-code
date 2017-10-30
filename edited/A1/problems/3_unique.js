/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
  // your code here...
  let uniqs = [];

  array.forEach(currentItem => {
    if(!uniqs.includes(currentItem)) {
      uniqs.push(currentItem);
    }
  });

  return uniqs;
}

function unique2(array) {
  let uniqs = [];

  array.forEach(currentItem => {
    if(uniqs.indexOf(currentItem) === -1) {
      uniqs.push(currentItem);
    }
  });

  return uniqs;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = unique;
