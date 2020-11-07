let ulElement = document.querySelector(".bg_grad ul");
let ulElement2 = document.querySelectorAll(".bg_grad ul")[1];

const songData = (str) => {
  fetch("https://rapidapi.p.rapidapi.com/search?q=" + str, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((responseObject) => {
      console.log(responseObject);
      let secTitle = document.createElement("h1");
      secTitle.innerText = str.toUpperCase();
      secTitle.style.color = "white";
      secTitle.classList.add("mb-4");
      ulElement2.appendChild(secTitle);

      let liElement = document.createElement("li");
      liElement.style.listStyle = "none";
      ulElement2.appendChild(liElement);

      let row = document.createElement("div");
      row.classList.add("row", "mt-3", "mb-5");
      liElement.appendChild(row);

      // let map = new Map();
      // for (element of responseObject.data) {
      //   map.set(element.album.id, element);
      // }

      // let filteredData = [];
      // map.forEach((value, key, map) => {
      //   filteredData.push(value);
      // });
      responseObject.data.forEach((element) => {
        let divElement = document.createElement("div");
        divElement.classList.add(
          "covers",
          "col-6",
          "col-md-3",
          "col-lg-2",
          "mb-2"
        );
        row.appendChild(divElement);

        divElement.innerHTML = `
                
                        <div class="position-relative">
                          <img
                            class="img-fluid"
                            src="${element.album.cover_medium}"
                          />

                          <div class="playMusic">
                            <i class="far fa-heart fa-2x mx-2 position-relative"
                              ><div class="saveLibrary">Save to your Library</div></i
                            >
                            <i class="far fa-play-circle fa-4x"></i>
                            <i class="fas fa-ellipsis-h fa-2x mx-2"
                              ><div class="more">More</div></i
                            >
                          </div>
                        </div>
                        <p class="text-center spotify-text-secondary mt-2">
                          ${element.title}
                        </p>
                      
      `;
      });
    });
};

const albumData = (str) => {
  fetch("https://rapidapi.p.rapidapi.com/search?q=" + str, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((responseObject) => {
      console.log(responseObject);
      let secTitle = document.createElement("h1");
      secTitle.innerText = str.toUpperCase();
      secTitle.style.color = "white";
      secTitle.classList.add("mb-4");
      ulElement.appendChild(secTitle);

      let liElement = document.createElement("li");
      liElement.style.listStyle = "none";

      ulElement.appendChild(liElement);

      let row = document.createElement("div");
      row.classList.add("row", "mt-3", "mb-5");
      liElement.appendChild(row);

      let map = new Map();
      for (element of responseObject.data) {
        map.set(element.album.id, element);
      }

      let filteredData = [];
      map.forEach((value, key, map) => {
        filteredData.push(value);
      });
      filteredData.forEach((element) => {
        let divElement = document.createElement("div");
        divElement.classList.add(
          "covers",
          "col-6",
          "col-md-3",
          "col-lg-2",
          "mb-2"
        );
        row.appendChild(divElement);

        divElement.innerHTML = `
                
                        <div class="position-relative">
                          <img
                            class="img-fluid"
                            src="${element.album.cover_medium}"
                          />

                          <div class="playMusic">
                            <i class="far fa-heart fa-2x mx-2 position-relative"
                              ><div class="saveLibrary">Save to your Library</div></i
                            >
                            <i class="far fa-play-circle fa-4x"></i>
                            <i class="fas fa-ellipsis-h fa-2x mx-2"
                              ><div class="more">More</div></i
                            >
                          </div>
                        </div>
                        <p class="text-center spotify-text-secondary mt-2">
                          ${element.album.title}
                        </p>
                      
      `;
      });
    });
};

let albumBTN = document.createElement("button");

albumBTN.classList.add("spotify-btn-green", "my-5");
albumBTN.innerHTML = "Load albums";
albumBTN.style.width = "150px";
ulElement.appendChild(albumBTN);

albumBTN.onclick = function () {
  albumData("eminem");
  albumData("metallica");
  albumData("behemoth");
  albumBTN.remove();
};

let countBtn = document.createElement("button");

countBtn.classList.add("spotify-btn-secondary", "my-5", "ml-5");
countBtn.innerHTML = "Load number of albums";
countBtn.style.cssText = "padding-bottom:10px;padding-top:10px;width:200px";
ulElement.appendChild(countBtn);

countBtn.onclick = function () {
  let albums = ulElement.querySelectorAll(".covers");
  alert("The number of unique albums is: " + albums.length);
};

window.onload = function () {
  songData("eminem");
  songData("metallica");
  songData("behemoth");
};
