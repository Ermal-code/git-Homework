const addNewName = () => {
  let textInp = document.getElementById("newName");
  let ulElement = document.getElementById("myNameList");
  let liElement = document.createElement("li");
  liElement.classList.add("list-group-item");
  liElement.classList.add("col-2");
  liElement.innerHTML = textInp.value;
  if (textInp.value !== "") {
    ulElement.appendChild(liElement);
  } else {
    console.log("Nothing has been typed");
  }
  textInp.value = "";
};

const createTeams = () => {
  let teamList = document.querySelectorAll(".row")[2];
  let teamNumber = document.querySelector(".custom-select");
  for (let i = 0; i < parseInt(teamNumber.value); i++) {
    team = document.createElement("ul");
    team.innerHTML = "Team" + (i + 1);

    teamList.appendChild(team);
    let ulTeam = document.querySelectorAll(".teamS ul");
    ulTeam[i].classList.add("col-2");
  }
};

const assignMember = () => {
  let liElement = document.querySelectorAll("#myNameList li");
  let ulElement = document.querySelector("#myNameList");
  let ulTeam = document.querySelectorAll(".teamS ul");

  let randomName = Math.floor(Math.random() * liElement.length);
  let randomElement = liElement[randomName];

  let randomTeam = Math.floor(Math.random() * ulTeam.length);
  let randomUl = ulTeam[randomTeam];

  let liTeam = document.createElement("li");
  liTeam.innerHTML = randomElement.innerHTML;

  let inputbut = document.createElement("BUTTON");
  inputbut.innerHTML = "X";
  inputbut.style.cssText = "margin-left:8px";
  inputbut.classList.add("button1");

  randomUl.appendChild(liTeam);
  liTeam.appendChild(inputbut);
  liTeam.style.display = "inline-block;";
  liTeam.style.listStyle = "none";
  ulElement.removeChild(randomElement);

  inputbut.onclick = function () {
    randomUl.removeChild(liTeam);
    liTeam.removeChild(inputbut);
    ulElement.appendChild(liTeam);
    liTeam.classList.add("list-group-item");
    liTeam.classList.add("col-2");
  };
};
let resetBtn = document.createElement("BUTTON");
resetBtn.innerHTML = "Reset";
resetBtn.style.cssText = "margin-left:20rem;margin-top:5rem;";
resetBtn.classList.add("btn");
resetBtn.classList.add("btn-outline-secondary");
document.body.appendChild(resetBtn);

let teamList = document.querySelectorAll(".row")[2];
let ulElement = document.getElementById("myNameList");

resetBtn.onclick = function () {
  while (teamList.firstChild) {
    teamList.removeChild(teamList.firstChild);
  }
  while (ulElement.firstChild) {
    ulElement.removeChild(ulElement.firstChild);
  }
};
