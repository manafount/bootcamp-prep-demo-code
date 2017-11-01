/******************************************************************************
Write a function passingStudents(students) that accepts an array of student objects.
It should iterate through the list of students and return an array of the names
of all the students who have an average grade of at least 70.

Example:

var students = [
  {
    "name": "Kush",
    "id": 12345,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
  },
  {
    "name": "Ned",
    "id": 55555,
    "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
  },
  {
    "name": "Haseeb",
    "id": 94110,
    "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
  }
];

passingStudents(students); // => [ 'Kush', 'Ned' ]
*******************************************************************************/

function passingStudents(students) {
// these variable declarations should be indented, otherwise they look like they're outside the scope of the function! -MK
var average = 0; // this will work, but it refers to the average of each individual student, so I would put it inside of the for loop -MK
var bestStudent = []; // maybe use 'bestStudents', since bestStudent implies there can be only one -MK

  for (var i = 0; i < students.length; i += 1) {
    debugger
    var student = students[i];
    var studentName = student.name;
    var studentGrades = student.grades;
    var sum = 0;

    for (var key in studentGrades) { // good use of for-in to loop through properties of an object! -MK
      var studentScore = studentGrades[key].score;
      sum += studentScore;

      }
      average = sum / 3; // uh oh! students can have any number of grades, so you won't always divide by 3 for the average -MK
      if (average >= 75) {
      bestStudent.push(studentName); // remember to indent code inside of each 'block' of a conditional -MK
      }
    }
  return bestStudent;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = passingStudents;
