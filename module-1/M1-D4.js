/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = (l1, l2) => l1 * l2;

console.log(area(2, 3));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = (a, b) => {
  if (a === b) {
    return 3 * (a + b);
  } else {
    return a + b;
  }
};

console.log(crazySum(3, 3));
/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = (x) => {
  if (x > 19) {
    return 3 * Math.abs(x - 19);
  } else {
    return Math.abs(x - 19);
  }
};

console.log(crazyDiff(30));
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = (N) => {
  if ((N >= 20 && N <= 100) || N === 400) {
    return true;
  } else {
    return false;
  }
};

console.log(boundary(40));
/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = (S = "") => {
  if (S.startsWith("Strive")) {
    return S;
  } else {
    return "Strive" + S;
  }
};
console.log(strivify(" is the BEST!!!!"));
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (X = 0) => {
  if (X > 0) {
    if (X % 3 === 0 || X % 7 === 0) {
      return "Is a multiple of 3 or a multiple of 7: " + true;
    } else {
      return "Is a multiple of 3 or a multiple of 7: " + false;
    }
  } else {
    return "Number is negative";
  }
};

console.log(check3and7(3));
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = (str = "") => {
  myArray = str.split("");

  myArrayReverse = myArray.reverse();

  joinArray = myArrayReverse.join("");

  return joinArray;
};

console.log(reverseString("Google"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

//// I know this is wrong but i don't want to be stuck here !!!

function upperFirst(str) {
  let arrayOfWords = str.split(" ");
  for (i = 0; i < arrayOfWords.length; i++) {
    let findFirst = arrayOfWords[i].charAt(0).toUpperCase();
    arrayOfWords[i] = findFirst + arrayOfWords[i].substr(1);
  }
  return arrayOfWords.join(" ");
}

console.log(upperFirst("ermal asllani"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (str = "") => {
  myArray = str.split("");

  myArray.splice(0, 1);

  myArray.pop();

  joinArray = myArray.join("");

  return joinArray;
};

console.log(cutString("Ermal Asllani"));
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom = (n) => {
  let myArray = [];

  for (i = 0; i < n; i++) {
    myArray.push(Math.floor(Math.random() * 11));
  }
  return myArray;
};

console.log(giveMeRandom(10));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
