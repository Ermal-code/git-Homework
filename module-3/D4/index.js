let addToCardList = [];
const loadImg = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => response.json())
    .then((body) => {
      console.log(body);
      body.forEach((element) => {
        let divElement = document.createElement("div");
        divElement.classList.add("col-md-4");
        document.querySelectorAll(".row")[1].appendChild(divElement);

        divElement.innerHTML = `
         
          <div class="card mb-4 shadow-sm">
          <img class="img-fluid" style="height:200px" src="${element.img}">
          <div class="card-body">
              <p class="card-text">
                  ${element.title}
              </p>
              <p class="text-info">${element.category}</p>
              <h4 class="text-warning">$${element.price}</h4>
              <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary" >
                         <span>Add to card <i class="ml-2 fas fa-cart-plus"></i></span>
                      </button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">
                      <span>Skip <i class="ml-2 fas fa-forward"></i></span>
                      </button>
                  </div>
                  <small class="text-danger">${element.asin}</small>
              </div>
          </div>
          `;

        const addToCard = (e) => {
          const node = e.currentTarget;

          const firstParent = node.parentElement;
          const secondParent = firstParent.parentElement;
          const thirdParent = secondParent.parentElement;
          const fourthParent = thirdParent.parentElement;

          if (fourthParent.className.includes("bg-info")) {
            fourthParent.classList.remove("bg-info");
            //   addToCardList.splice(fourthParent);
          } else {
            fourthParent.classList.add("bg-info");
            addToCardList.push(fourthParent.parentElement);
          }

          console.log(addToCardList);
        };
        let addToCardbtn = document.querySelectorAll(
          ".card .btn-sm:first-of-type"
        );

        for (let i = 0; i < addToCardbtn.length; i++) {
          addToCardbtn[i].onclick = addToCard;
        }

        const skipIMG = (e) => {
          const node = e.currentTarget;

          const firstParent = node.parentElement;
          const secondParent = firstParent.parentElement;
          const thirdParent = secondParent.parentElement;
          const fourthParent = thirdParent.parentElement;
          console.log(fourthParent);
          fourthParent.parentElement.remove();
        };
        let hideBtn = document.querySelectorAll(".card .btn-sm:last-of-type");

        for (let i = 0; i < hideBtn.length; i++) {
          hideBtn[i].onclick = skipIMG;
        }
      });
    });
};

const showCardList = () => {
  addToCardList.forEach((element) => {
    document.querySelectorAll(".row")[1].appendChild(element);
  });
};

let showCardListbtn = document.querySelector(
  ".jumbotron p:last-of-type .btn:last-of-type"
);
showCardListbtn.onclick = function () {
  while (document.querySelectorAll(".row")[1].firstChild) {
    document
      .querySelectorAll(".row")[1]
      .removeChild(document.querySelectorAll(".row")[1].firstChild);
  }
  showCardList();
};

let homeBtn = document.querySelector(
  ".jumbotron p:last-of-type .btn:first-of-type"
);

homeBtn.onclick = function () {
  while (document.querySelectorAll(".row")[1].firstChild) {
    document
      .querySelectorAll(".row")[1]
      .removeChild(document.querySelectorAll(".row")[1].firstChild);
  }
  loadImg();
  for (let i = 0; i < addToCardList.length; i++) {
    document.querySelectorAll(".col-md-4")[i].classList.add("bg-info");
  }
};

window.onload = function () {
  loadImg();
};
