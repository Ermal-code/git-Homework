const changeH = () => {
  const hTitle = document.querySelector("h1");
  hTitle.innerText = "Ermal/phone Shop";

  return hTitle;
};
changeH();

const bgColor = () => {
  const colbg = document.querySelector("body");
  colbg.style.background = "azure";
  return colbg;
};
bgColor();
const footChang = () => {
  const changF = document.getElementById("main-footer");
  changF.innerText = "Fushe-Kosove,Kosova /Mali-phone Shop";
  return changF;
};
footChang();
