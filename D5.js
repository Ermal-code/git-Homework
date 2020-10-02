/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/

const test = "StriveSchool is the best!";
console.log(test);

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/

const sum = 10 + 20;
console.log(sum);

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

let random = Math.floor(Math.random() * 21);
console.log(random);

/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/

const Me = {
  Name: "Ermal",
  Surname: "Asllani",
  Age: 26,
};
console.log(Me);

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/
delete Me.Age;

console.log(Me);
/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

Me.skills = ["R", "HTML", "CSS", "PHP", "MySql"];

console.log(Me);

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/

Me.skills.pop();

console.log(Me);

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/

const Dice = (N) => {
  const min = 1;
  randomD = Math.floor(Math.random() * 6) + min;
  return randomD;
};

console.log(Dice());
/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

const whoIsBigger = (a, b) => {
  if (a > b) {
    max = a;
  } else if (a < b) {
    max = b;
  } else {
    max = "Number are equal";
  }

  return max;
};
console.log(whoIsBigger(5, 2));
/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const SplitMe = (S) => {
  splitfunc = S.split(" ");
  return splitfunc;
};

console.log(SplitMe("Strive School is the best!"));
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/

const deleteOne = (S, B) => {
  if (B === true) {
    return S.substring(1);
  } else {
    return S.substring(0, S.length - 1);
  }
};
console.log(deleteOne("Strive", false));
/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

const onlyLetters = (S) => {
  return S.replace(/(\d+)/g, "");
};
console.log(onlyLetters("Strive 123 the best 1234459990 school!!! 444"));

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/

// I have no idea for most of the re variable but i found on internet hope someone could explain it to me :D

function IsThisAnEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
console.log(IsThisAnEmail("ermal.aa@live.com"));

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/

const whatDayIsIt = () => {
  day = new Date();
  today = day.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[today];
};
console.log(whatDayIsIt());

/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

const rollTheDice = (N) => {
  let diceArray = [];
  let sum = 0;

  for (let i = 0; i < N; i++) {
    diceArray.push(Dice());
  }
  for (let z = 0; z < diceArray.length; z++) {
    sum += diceArray[z];
  }
  return { diceArray, sum };
};

console.log(rollTheDice(4));

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/

const howManyDays = (D = new Date()) => {
  date = new Date();
  let today =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDay();

  const diffTime = Math.abs(today - D);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};
console.log(howManyDays("2019/10/02"));

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/
const isTodayMyBDay = () => {
  bDay = new Date("18/2");
  date = new Date();
  today = date.getDate() + "/" + (date.getMonth() + 1);
  if (today === bDay) {
    console.log(true);
  } else console.log(false);
  return today;
};

console.log(isTodayMyBDay());
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/
const olderMovie = () => {
  let year = [];
  for (i = 0; i < movies.length; i++) {
    year.push(movies[i]["Year"]);
  }
  year = year.map(Number);
  minYear = Math.min(...year);
  return minYear;
};

console.log(olderMovie());
/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

const countMovies = () => {
  return movies.length;
};

console.log(countMovies());
/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/
const onlyTitles = () => {
  movieTitles = [];
  for (let i = 0; i < movies.length; i++) {
    movieTitles.push(movies[i]["Title"]);
  }
  return movieTitles;
};

console.log(onlyTitles());
/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/
const onlyThisMillennium = () => {
  let year = [];
  for (let i = 0; i < movies.length; i++) {
    year.push(movies[i]["Year"]);
  }
  year = year.map(Number);
  year2000 = [];
  for (let j = 0; j < year.length; j++) {
    if (year[j] > 1999) {
      year2000.push(year[j]);
    }
  }

  return year2000;
};

console.log(onlyThisMillennium());
/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

const getMovieById = (ID) => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === ID) {
      return movies[i];
    }
  }
};
console.log(getMovieById("tt4154756"));
/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/
const sumYears = () => {
  let year = [];
  for (let i = 0; i < movies.length; i++) {
    year.push(movies[i]["Year"]);
  }
  year = year.map(Number);
  let sum = 0;
  for (let i = 0; i < year.length; i++) {
    sum += year[i];
  }
  return sum;
};
console.log(sumYears());
/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/
const searchMovie = (S) => {
  let sMovie = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.match(S)) {
      sMovie.push(movies[i]);
    }
  }
  return sMovie;
};

console.log(searchMovie("The"));
/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/
const searchAndDivide = (S) => {
  let matchmovie = [];
  let nonMatch = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.match(S)) {
      matchmovie.push(movies[i]);
    } else {
      nonMatch.push(movies[i]);
    }
  }
  obj = {};
  Object.assign(obj["match"], matchmovie);
  Object.assign(obj["noMatch"], nonMatch);
  return obj;
};

console.log(searchMovie("Av"));

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

const deletX = (N) => {
  movies.splice(N, 1);
  return movies;
};
console.log(deletX(2));

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/
const halfTree = (H) => {
  a = "*";
  for (i = 1; i <= H; i++) {
    for (j = 1; j <= 2 * i - 1; j++) {
      console.log("*");
    }

    console.log("<br>");
  }
  return a;
};
console.log(halfTree(3));
/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

/* Movies array is an example array, used for the exs. Don't change it :)  */
