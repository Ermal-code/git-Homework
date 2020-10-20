/*
        JS Exercises
        EX11) Write a function to add a new link into the navbar
        EX12) Write a function to remove the "Search" magnifying glass icon
        EX13) Write a function to change the background of the jumbotron
        EX14) Write a function to change the color of the main title
        EX15) Write a function to change the column size for post headings
        EX16) Write a function to remove all the links under "Elsewhere"
        EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
        EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
        EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
        EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
    */

//Ex 11

const addNewLink = (a) => {
  let links = document.createElement("a");
  links.innerText = a;
  document.querySelector("nav").appendChild(links);
};

//Ex 12
const removeMagnifyingGlass = () => {
  let a = document.querySelectorAll(".text-muted")[1];
  a.style.display = "none";
};

//Ex 13
const jubotronBG = (color) => {
  let jumbo = document.querySelector(".jumbotron");
  jumbo.classList.remove("bg-dark");
  jumbo.style.backgroundColor = color;
};

//Ex 14
const titleColor = (color) => {
  document.querySelector("h1").style.color = color;
};

//Ex 15
const changeBoxSize = (n) => {
  let box1 = document.querySelectorAll(".col-md-6")[1];
  let box2 = document.querySelectorAll(".col-md-6")[2];

  box1.classList.remove("col-md-6");
  box1.classList.add("col-md-" + n);

  box2.classList.remove("col-md-6");
  box2.classList.add("col-md-" + n);
};

//Ex 16
const removeLinks = () => {
  let linkList = document.querySelectorAll("aside div ol")[1];
  while (linkList.firstChild) {
    linkList.removeChild(linkList.firstChild);
  }
};

//Ex 17
const trimFiftyChar = () => {
  let paraAll = document.querySelectorAll(".blog-main p:nth-child(3)")[0];
  let paraAll1 = document.querySelectorAll(".blog-main p:nth-child(3)")[1];
  let paraAll2 = document.querySelectorAll(".blog-main p:nth-child(3)")[2];

  trimtext1 = paraAll.innerText.slice(50);
  paraAll.innerText = trimtext1;

  trimtext2 = paraAll1.innerText.slice(50);
  paraAll1.innerText = trimtext2;

  trimtext3 = paraAll2.innerText.slice(50);
  paraAll2.innerText = trimtext3;
};

//Ex 18
const addNewBlogPost = () => {
  let newDiv = document.createElement("div");
  let newTitle = document.createElement("h2");
  newTitle.innerText = "New Blog";
  newDiv.style.height = "40px";
  newDiv.style.backgroundColor = "blue";
  let referenceBlog = document.querySelectorAll(".blog-post")[2];
  referenceBlog.after(newDiv);
  newDiv.appendChild(newTitle);
};

//Ex 19
const removeLastBlogPost = () => {
  let lastBlog = document.querySelector(".blog-main div:last-of-type");

  lastBlog.remove(lastBlog);
};

//Ex 20

let authors = document.querySelectorAll(".blog-post-meta a");
authors[0].onmouseover = function () {
  alert("Mark");
};
authors[1].onmouseover = function () {
  alert("Jacob");
};
authors[2].onmouseover = function () {
  alert("Chris");
};

let newBloginp = document.querySelectorAll(".blog-pagination a")[1];
newBloginp.onclick = function () {
  addNewBlogPost();
};
