window.onload = function () {
  let sumAlbum = document.querySelectorAll(".col-2")[1];
  let liElement = document.querySelectorAll(".col-8 li");
  sumAlbum.innerHTML = "Total albums in this page are:  " + liElement.length;

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
  btn[0].onclick = function () {
    toogleButton();
  };
};
