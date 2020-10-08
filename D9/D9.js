window.onload = function () {
  let numArray = [];
  let bingo = document.querySelector("#bingo");
  for (let i = 1; i < 77; i++) {
    numArray[i] = [];

    const bingochild = document.createElement("div");
    bingochild.className = "numClass";
    const num = document.createElement("h3");
    const addnum = i;
    num.innerText = addnum;
    bingochild.appendChild(num);
    bingo.appendChild(bingochild);
  }

  let inputbut = document.createElement("BUTTON");
  inputbut.innerHTML = "Click Me!";
  inputbut.classList.add("button1");
  document.querySelector("#randomNum").appendChild(inputbut);

  let inputli = document.createElement("text");
  inputli.classList.add("comment1");
  document.querySelector("#randomNum").appendChild(inputli);

  const randomizeNumber = () => {
    let randomN = Math.floor(Math.random() * 76) + 1;
    inputli.innerText = randomN;
  };

  inputbut.onclick = function () {
    randomizeNumber();
    addSelected();
  };

  const addSelected = () => {
    let selected = document.querySelector(".selected");
    inputValue = document.querySelector(".comment1").innerText;
    num = document.querySelectorAll("h3");
    for (i = 0; i < num.length; i++) {
      if (inputValue == num[i].innerText) {
        num[i].classList.add("selected");
      }
    }
  };
};
