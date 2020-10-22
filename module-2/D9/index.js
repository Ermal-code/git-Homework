window.onload = function () {
  let sumAlbum = document.querySelectorAll(".col-2")[1];
  let liElement = document.querySelectorAll(".col-8 li");
  sumAlbum.innerHTML = "Total albums in this page are:  " + liElement.length;
};
let btn = document.querySelectorAll(".btn");

const toogleButton = () => {
  let sect = document.querySelectorAll("section");

  let displaySet = sect.style.display;
  if (displaySet === "flex") {
    sect.style.display = "none";
  } else {
    sect.style.display = "flex";
  }
};
// { <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
//   <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
//   <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button> */}
