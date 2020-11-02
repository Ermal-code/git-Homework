/* 1) MAX CHAR
Given a string, return the character that is most
commonly used in the string.
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

const maxChar = (str) => {
  let strArray = str.split("");
  let repeatedChar = "";
  let mf = 1;
  let m = 0;
  for (let i = 0; i < strArray.length; i++) {
    for (let j = i; j < strArray.length; j++) {
      if (strArray[i] === strArray[j]) {
        m++;
      }
      if (mf < m) {
        mf = m;
        repeatedChar = strArray[i];
      }
    }
    m = 0;
  }
  return (
    "most repeated character is: " +
    repeatedChar +
    " and is repeated " +
    mf +
    " times"
  );
};

console.log(maxChar("Strrriiiiveeee is the beeesttt"));

/* 2) ANAGRAMS
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
const anagrams = (str, str1) => {
  let strArray = str.replace(/[^\w]/g, "").toLowerCase().split("");
  let strArray1 = str1.replace(/[^\w]/g, "").toLowerCase().split("");
  strArray.sort();
  strArray1.sort();
  anagram = strArray.join("") === strArray1.join("");
  return (
    "are these two strings " +
    "(" +
    str +
    ")" +
    " and " +
    "(" +
    str1 +
    ")" +
    " anagrams : " +
    anagram
  );
};

console.log(anagrams("Strive,..  i  s the best", "stivre!isbest hte"));
/* 3) ANAGRAMS 2
Given a word and a list of possible anagrams, select the correct sublist.
--- Examples 
    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

const anagrams2 = (str, myArray) => {
  let strArray = str.replace(/[^\w]/g, "").toLowerCase().split("");
  strArray = strArray.sort().join("");
  let anotherArray = [];
  for (let i = 0; i < myArray.length; i++) {
    myArray[i].replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

    if (
      strArray ===
      myArray[i].replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
    ) {
      anotherArray.push(myArray[i]);
    }
  }
  return anotherArray;
};

console.log(
  anagrams2("listen", [
    "enlists",
    "google",
    "inlets",
    "elnitss!",
    "il!!nets..",
    "banana",
  ])
);

/* 4) PALINDROME
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

const palindrome = (str) => {
  let strArray = str.toLowerCase().split("");
  strArray = strArray.reverse().join("");
  isPalindrome = str === strArray;
  return str + " is palindrome : " + isPalindrome;
};
console.log(palindrome("arra"));

/* 5) REVERSE INT
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const reverseInt = (N) => {
  number = N.toString().split("").reverse();

  if (number[number.length - 1] === "-") {
    number.pop();
    number.unshift("-");
    number = number.join("");
    console.log(number);
    return N + " reversed is : " + parseInt(number);
  } else {
    number = number.join("");
    return N + " reversed is : " + parseInt(number);
  }
};

console.log(reverseInt(-5431230));

/* 6) STEPS
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

const stepShape = (N) => {
  const char = "#";
  const space = " ";
  for (i = 1; i <= N; i++) {
    console.log("'" + char.repeat(i) + space.repeat(N - i) + "'");
  }
};

stepShape(7);
/* 7) REVERSE STRING
Given a string, return a new string with the reversed
order of characters
--- Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("Greetings!"));

/* 8) CHUNK
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides
--- Examples
    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

const pyramid = (N) => {
  const char = "#";
  const space = " ";
  for (i = 1; i <= N; i++) {
    console.log(
      "'" +
        space.repeat(N - i) +
        char.repeat(i * 2 - 1) +
        space.repeat(N - i) +
        "'"
    );
  }
};
pyramid(5);
/* 10) SPYRAL MATRIX
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]
*/
