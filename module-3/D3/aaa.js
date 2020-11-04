const hideIMG = () => {
  let imgCard = document.querySelectorAll(".card svg");
  let imgCardStyle = imgCard.style.display;
  if (imgCardStyle === "none") {
    imgCardStyle === "block";
  } else {
    imgCardStyle === "none";
  }
};

let hideBtn = document.querySelectorAll(".card .btn:last-of-type");

for (let i = 0; i < hideBtn.length; i++) {
  hideBtn[i].onclick = function () {
    hideIMG();
  };
}
