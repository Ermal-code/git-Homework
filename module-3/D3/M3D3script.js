const loadImg = function () {
  let myToast = document.querySelector(".toast");
  fetch("http://www.splashbase.co/api/v1/images/search?query=green")
    .then((response) => response.json())
    .then((imgs) => {
      console.log(imgs);

      let urlS =
        imgs.images.length <= 9 ? imgs.images : imgs.images.slice(0, 9);

      let sum = urlS.map((urls) => urls.id).reduce((sum, id) => sum + id, 0);

      let toastBody = document.querySelector(".toast-body");
      toastBody.innerHTML =
        `Total images loaded: ${urlS.length}` + "<br>Sum of Id is : " + sum;
      myToast.classList.add("show");

      urlArray = imgs.images.map((urls) => urls.url);

      console.log(sum);
      for (let i = 0; i < urlS.length; i++) {
        let divElement = document.createElement("div");
        divElement.classList.add("col-md-4");

        document.querySelectorAll(".row")[1].appendChild(divElement);
        let col = document.querySelectorAll(".col-md-4");
        col[i].innerHTML = `
                                <div class="card mb-4 shadow-sm">
                                <img class="img-fluid" style="height:200px" src="${urlS[i].url}">
                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#mod${urlS[i].id}">
                                                View
                                            </button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                                Hide
                                            </button>
                                        </div>
                                        <small class="text-danger">${urlS[i].id}</small>
                                    </div>
                                </div>
                                <div class="modal fade" id="mod${urlS[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <img class ="img-fluid" style="height:200px" src="${urlS[i].url}">
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                `;
        const hideIMG = (e) => {
          const node = e.currentTarget;

          const firstParent = node.parentElement;
          const secondParent = firstParent.parentElement;
          const thirdParent = secondParent.parentElement;
          const fourthParent = thirdParent.parentElement;

          let imgCard = fourthParent.querySelector(".card > :first-child");

          if (imgCard.style.display === "none") {
            imgCard.style.display = "flex";
          } else {
            imgCard.style.display = "none";
          }
          console.log(node);
        };

        let hideBtn = document.querySelectorAll(".card .btn-sm:last-of-type");

        for (let i = 0; i < hideBtn.length; i++) {
          hideBtn[i].onclick = hideIMG;
        }
      }
    });
  setTimeout(function () {
    myToast.classList.remove("show");
  }, 5000);
};

let primarybtn = document.querySelector(".btn-primary");
primarybtn.onclick = function () {
  while (document.querySelectorAll(".row")[1].firstChild) {
    document
      .querySelectorAll(".row")[1]
      .removeChild(document.querySelectorAll(".row")[1].firstChild);
  }
  loadImg();
  console.log(urlArray);
};

//2) When pressing on Load Seconday Images, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your secondary query
//3) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view
//We always get the last img because the modal loads after the page ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//4) The Edit button should be replace with a "Hide" button.
//5) When the hide button is pressed, the whole picture card disappears.

const loadSecImg = function () {
  let myToast = document.querySelector(".toast");
  fetch("http://www.splashbase.co/api/v1/images/search?query=blue")
    .then((response) => response.json())
    .then((imgs) => {
      console.log(imgs);
      urlArray = imgs.images.map((urls) => urls.url);
      let urlS =
        imgs.images.length <= 9 ? imgs.images : imgs.images.slice(0, 9);

      let sum = urlS.map((urls) => urls.id).reduce((sum, id) => sum + id, 0);

      let toastBody = document.querySelector(".toast-body");
      toastBody.innerHTML =
        `Total images loaded: ${urlS.length}` + "<br>Sum of Id is : " + sum;
      myToast.classList.add("show");

      console.log(sum);

      for (let i = 0; i < urlS.length; i++) {
        let divElement = document.createElement("div");
        divElement.classList.add("col-md-4");

        document.querySelectorAll(".row")[1].appendChild(divElement);
        let col = document.querySelectorAll(".col-md-4");
        col[i].innerHTML = `
                                <div class="card mb-4 shadow-sm">
                                <img class="img-fluid" style="height:200px" src="${urlS[i].url}">
                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#mod${urlS[i].id}">
                                            
                                                View
                                            </button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                                Hide 
                                            </button>
                                        </div>
                                        <small class="text-danger">${urlS[i].id}</small>
                                    </div>
                                </div>
                                <div class="modal fade" id="mod${urlS[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <img class ="img-fluid" style="height:200px" src="${urlS[i].url}">
                                    </div>
                                    <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                                `;
        const hideIMG = (e) => {
          const node = e.currentTarget;

          const firstParent = node.parentElement;
          const secondParent = firstParent.parentElement;
          const thirdParent = secondParent.parentElement;
          const fourthParent = thirdParent.parentElement;

          let imgCard = fourthParent.querySelector(".card > :first-child");

          if (imgCard.style.display === "none") {
            imgCard.style.display = "flex";
          } else {
            imgCard.style.display = "none";
          }
          console.log(node);
        };

        let hideBtn = document.querySelectorAll(".card .btn-sm:last-of-type");

        for (let i = 0; i < hideBtn.length; i++) {
          hideBtn[i].onclick = hideIMG;
        }
      }
    });
  setTimeout(function () {
    myToast.classList.remove("show");
  }, 5000);
};

let secbtn = document.querySelector(".btn-secondary");
secbtn.onclick = function () {
  while (document.querySelectorAll(".row")[1].firstChild) {
    document
      .querySelectorAll(".row")[1]
      .removeChild(document.querySelectorAll(".row")[1].firstChild);
  }
  loadSecImg();
  console.log(urlArray);
};

const loadSearchImg = function () {
  let myToast = document.querySelector(".toast");
  let urlFetch =
    "http://www.splashbase.co/api/v1/images/search?query=" +
    document.querySelector(".jumbotron input[type='text']").value;
  fetch(urlFetch)
    .then((response) => response.json())
    .then((imgs) => {
      console.log(imgs);
      urlArray = imgs.images.map((urls) => urls.url);

      let urlS =
        imgs.images.length <= 9 ? imgs.images : imgs.images.slice(0, 9);

      let sum = urlS.map((urls) => urls.id).reduce((sum, id) => sum + id, 0);

      let toastBody = document.querySelector(".toast-body");
      if (urlS.length === 0) {
        toastBody.style.backgroundColor = "tomato";
        toastBody.style.color = "white";
        myToast.style.top = "50%";
        myToast.style.right = "45%";
        toastBody.innerHTML = "There is no such thing in our database";
      } else {
        toastBody.innerHTML =
          `Total images loaded: ${urlS.length}` + "<br>Sum of Id is : " + sum;
        myToast.style.top = "20%";
        myToast.style.right = "0";
      }
      myToast.classList.add("show");

      console.log(sum);

      for (let i = 0; i < urlS.length; i++) {
        let divElement = document.createElement("div");
        divElement.classList.add("col-md-4");

        document.querySelectorAll(".row")[1].appendChild(divElement);
        let col = document.querySelectorAll(".col-md-4");
        col[i].innerHTML = `
                                  <div class="card mb-4 shadow-sm">
                                  <img class="img-fluid" style="height:200px" src="${urlS[i].url}">
                                  <div class="card-body">
                                      <p class="card-text">
                                          This is a wider card with supporting text below as a natural
                                          lead-in to additional content. This content is a little bit
                                          longer.
                                      </p>
                                      <div class="d-flex justify-content-between align-items-center">
                                          <div class="btn-group">
                                              <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#mod${urlS[i].id}">
                                              
                                                  View
                                              </button>
                                              <button type="button" class="btn btn-sm btn-outline-secondary">
                                                  Hide 
                                              </button>
                                          </div>
                                          <small class="text-danger">${urlS[i].id}</small>
                                      </div>
                                  </div>
                                  <div class="modal fade" id="mod${urlS[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                  <div class="modal-dialog">
                                      <div class="modal-content">
                                      <div class="modal-header">
                                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                          </button>
                                      </div>
                                      <div class="modal-body">
                                          <img class ="img-fluid" style="height:200px" src="${urlS[i].url}">
                                      </div>
                                      <div class="modal-footer">
                                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      </div>
                                      </div>
                                  </div>
                                  </div>
                                  </div>`;
        const hideIMG = (e) => {
          const node = e.currentTarget;

          const firstParent = node.parentElement;
          const secondParent = firstParent.parentElement;
          const thirdParent = secondParent.parentElement;
          const fourthParent = thirdParent.parentElement;

          let imgCard = fourthParent.querySelector(".card > :first-child");

          if (imgCard.style.display === "none") {
            imgCard.style.display = "flex";
          } else {
            imgCard.style.display = "none";
          }
          console.log(node);
        };

        let hideBtn = document.querySelectorAll(".card .btn-sm:last-of-type");

        for (let i = 0; i < hideBtn.length; i++) {
          hideBtn[i].onclick = hideIMG;
        }
      }
    });
  setTimeout(function () {
    myToast.classList.remove("show");
  }, 5000);
};

let searchBtn = document.querySelector(".jumbotron #button-addon1");

searchBtn.onclick = function () {
  while (document.querySelectorAll(".row")[1].firstChild) {
    document
      .querySelectorAll(".row")[1]
      .removeChild(document.querySelectorAll(".row")[1].firstChild);
  }

  loadSearchImg();
  console.log(urlArray);
};

const carouselImg = () => {
  fetch("http://www.splashbase.co/api/v1/images/search?query=forest")
    .then((response) => response.json())
    .then((carouselObj) => {
      console.log(carouselObj);

      let carouselBody = document.querySelector(".carousel-inner");
      let carIndcators = document.querySelector(".carousel-indicators");

      let sum = carouselObj.images
        .map((urls) => urls.id)
        .reduce((sum, id) => sum + id, 0);

      console.log(sum);

      let imgss = carouselObj.images.filter(
        (images) => images.site !== "unsplash"
      );

      for (let i = 0; i < imgss.length; i++) {
        let liElement = document.createElement("li");
        liElement.dataset.target = "#carouselExampleIndicators";
        liElement.setAttribute("data-slide-to", i);
        carIndcators.appendChild(liElement);
      }
      let liactive = carIndcators.querySelector("li");
      liactive.classList.add("active");
      imgss.forEach((element) => {
        let carouselDiv = document.createElement("div");
        carouselDiv.classList.add("carousel-item");
        carouselBody.appendChild(carouselDiv);

        carouselDiv.innerHTML = `
    <img src="${element.url}" class="d-block w-100"  />
    `;
      });
      let imgActive = carouselBody.querySelector("div");
      imgActive.classList.add("active");
    });
};
let urlArray = [];

window.onload = function () {
  carouselImg();
};
