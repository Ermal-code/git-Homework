/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const sumOfNum = (first, second) => {
  let sum = 0;
  if (first === second) {
    sum = 3 * (first + second);
    return sum;
  } else {
    sum = first + second;
    return sum;
  }
};

console.log(sumOfNum(2, 2));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkNum = (first, second) => {
  if (first === 50 || second === 50 || first + second === 50) {
    return true;
  } else {
    return false;
  }
};

console.log(checkNum(23, 50));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = (str, N) => {
  let newStr = str.slice(0, N - 1) + str.slice(N, str.length);
  return newStr;
};

console.log(removeChar("Strive", 3));

/*
4)
 Create a function to find the largest of three given integers.
*/

const findLargest = (first, second, third) => {
  let number = 0;
  let myArray = [first, second, third];

  for (let i = 0; i < myArray.length; i++) {
    if (number < myArray[i]) {
      number = myArray[i];
    } else {
      number = number;
    }
  }
  return number;
};
console.log(findLargest(12, 1, 0));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkNumRange = (first, second) => {
  if (
    (first > 40 && first < 60 && second > 40 && second < 60) ||
    (first >= 70 && first <= 100 && second >= 70 && second <= 100)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(checkNumRange(70, 100));
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

const copyString = (str, N) => {
  let newStr;
  let myArray = [];
  for (let i = 0; i < N; i++) {
    myArray.push(str);
  }

  newStr = myArray.join("");

  return newStr;
};

console.log(copyString("Strive", 5));

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityName = (str) => {
  if (str.startsWith("Los") || str.startsWith("New")) {
    return str;
  } else {
    return "";
  }
};

console.log(cityName("New York"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const sumOfArray = (first, second, third) => {
  let sum = 0;
  let myArray = [first, second, third];
  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
  }
  return sum;
};
console.log(sumOfArray(1, 2, 10));

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const testArray = (first, second) => {
  let myArray = [first, second];
  let arrayContains;
  for (let i = 0; i < myArray.length; i++) {
    if (first === 1 || first === 3 || second === 1 || second === 3) {
      arrayContains = true;
    } else {
      arrayContains = false;
    }
  }
  return "does contain 1 or 3 :" + arrayContains;
};
console.log(testArray(0, 0));
/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const testArray2 = (first, second) => {
  let myArray = [first, second];
  let arrayContains;
  for (let i = 0; i < myArray.length; i++) {
    if (first !== 1 && first !== 3 && second !== 1 && second !== 3) {
      arrayContains = true;
    } else {
      arrayContains = false;
    }
  }
  return "does not contain 1 or 3 :" + arrayContains;
};
console.log(testArray2(0, 2));
/*
11)
Create a function to find the longest string from a given array of strings.
*/

const longestString = (myArray) => {
  let str = "";
  for (let i = 0; i < myArray.length; i++) {
    if (str.length < myArray[i].length) {
      str = myArray[i];
    } else {
      str = str;
    }
  }

  return str;
};

console.log(longestString(["Strive", "is", "the best"]));

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

*/

const findAngle = (N) => {
  if (N > 0 && N < 90) {
    return "Acute angle";
  } else if (N === 90) {
    return "Right angle";
  } else if (N > 90 && N < 180) {
    return "Btuse angle";
  } else if (N === 180) {
    return "Straight angle";
  } else {
    return "Don't know this angle";
  }
};

console.log(findAngle(77));
/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/

const findIndex = (myArray) => {
  let element = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (element < myArray[i]) {
      element = myArray[i];
    } else {
      element = element;
    }
  }
  return myArray.indexOf(element);
};

console.log(findIndex([1, 12, 4, 5, 6, 4, 3]));
/*
14)
Create a function to get the largest even number from an array of integers.
*/

const largestEven = (myArray) => {
  let evenNumbers = [];
  let largestNumber = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
      evenNumbers.push(myArray[i]);
    }
  }
  for (let j = 0; j < evenNumbers.length; j++) {
    if (largestNumber < evenNumbers[j]) {
      largestNumber = evenNumbers[j];
    } else {
      largestNumber = largestNumber;
    }
  }

  return largestNumber;
};

console.log(largestEven([1, 2, 3, 4, 5, 6, 7, 12, 14, 15]));
/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/

const checkNumValue = (first, second) => {
  if ((first < 0 || second < 0) && (first > 0 || second > 0)) {
    return "one number is positive and one number is negative :" + true;
  } else {
    return "not " + true;
  }
};

console.log(checkNumValue(-2, 2));
/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all 
the characters in upper case. 
*/

const createNewString = (str) => {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    let threechar = str.slice(0, 3).toLowerCase();
    let afterThree = str.slice(3, str.length).toUpperCase();
    return threechar + afterThree;
  }
};
console.log(createNewString("STRive is the best"));
/*
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

const calcSum = (first, second) => {
  sum = first + second;
  if (sum > 50 && sum < 80) {
    return 65;
  } else {
    return 80;
  }
};

console.log(calcSum(30, 110));

/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

const numToStr = (N) => {
  let myArray = [];
  let str1 = "";
  let str2 = "";
  let str3 = "";
  for (let i = 0; i <= N; i++) {
    if (N % i === 0) {
      myArray.push(i);
    }
  }
  for (let j = 0; j < myArray.length; j++) {
    if (myArray[j] === 3) {
      str1 = "Diego";
    } else if (myArray[j] === 5) {
      str2 = "Riccardo";
    } else if (myArray[j] === 7) {
      str3 = "Stefano";
    }
  }
  console.log(myArray);
  if (str1 === "" && str2 === "" && str3 === "") {
    return N;
  } else {
    return str1 + str2 + str3;
  }
};

console.log(numToStr(210));
/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

const createAcronym = (str) => {
  let strArray = str.split(" ");
  let acronym = [];
  for (let i = 0; i < strArray.length; i++) {
    acronym.push(strArray[i].slice(0, 1));
  }
  return acronym.join("").toUpperCase();
};
console.log(createAcronym("strive school is the best"));
