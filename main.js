/*JavaScript Homework: Handling User Input, Data Types, and Arrays

Objective:
Create a program that collects and processes student information using functions and arrays. This exercise will test your understanding of functions, data types, user input, arrays, and simple data manipulation.

Instructions:
Define a function getUserInfo that:

Asks the user for their name using prompt.
Asks the user for their age using prompt.
Asks the user if they are present using confirm.
Returns an object containing:
name: the user's name.
age: the user's age (as a number).
attendance: a boolean indicating whether the student is present.

Use this function to collect data for multiple students and store their information in an array. (3 points)

Create a function showAttendancePercentage that:

Calculates the percentage of students who are present.
Displays this percentage in an alert. (2 points)

Create a function createTeams that:

Takes a number as a parameter (the desired number of teams).

Forms teams only with present students.

Distributes students across the teams in a structured way so that each team receives students in a cyclic order. (2 points)

(Bonus) Shuffles the students before assigning them to teams to ensure variety. (1 point)

For 10 present students and 3 teams required, logs in the console the teams in the following format:

TEAM 1 
Student 1
Student 4
Student 7
Student 10
TEAM 2
Student 2
Student 5
Student 8
TEAM 3
Student 3
Student 6
Student 9
Push your work to a personal Git repository and share the link to your repository. */

let numberOfStudents = prompt(
  `Please tell me how many students are in the class`
);
numberOfStudents = Number(numberOfStudents);

function getUserInfo() {
  let name = prompt(`Please tell the name of the student`);
  let age = prompt(`Please tell me the age of ${name}`);
  age = Number(age);
  let attendance = confirm(`Is ${name} present today?`);

  let student = { name, age, attendance };

  if (attendance === true) {
    console.log(`${name} is present`);
  } else {
    console.log(`${name} is absent.`);
  }
  return student;
}

let students = [];
for (let i = 0; i < numberOfStudents; i++) {
  let student = getUserInfo();
  students.push(student);
}

console.log(students);

function showAttendancePercentage() {
  let presentCount = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].attendance) {
      presentCount++;
    }
  }
  let attendancePercentage = (presentCount / numberOfStudents) * 100;
  return attendancePercentage;
}
alert(`The attendance percentage is: ${showAttendancePercentage()} % `);
