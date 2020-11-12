const handleSubmit = (e) => {
  e.preventDefault(); // preventing the default browser event handling
  submitProduct();
};

const fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let id = null;
window.onload = async () => {
  let url = new URLSearchParams(window.location.search);

  id = url.get("id");

  if (id) {
    let response = await fetch(fetchUrl + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzdkMTRiY2RlMTAwMTc2MTZhOTUiLCJpYXQiOjE2MDUxMDIzNTksImV4cCI6MTYwNjMxMTk1OX0.33fI9bSkGvFEm4gg5UVRhx2Pqrdm5Z3kNE04BOVm4tg",
      },
    });

    let product = await response.json();
    console.log(product);

    document.querySelector("#name").value = product.name;
    document.querySelector("#description").value = product.description;
    document.querySelector("#brand").value = product.brand;
    document.querySelector("#imageUrl").value = product.imageUrl;
    document.querySelector("#price").value = product.price;
  }
};

const submitProduct = async () => {
  let myProduct = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  };
  let spinner = document.querySelector(".spinner-border");
  spinner.classList.toggle("d-none");
  try {
    let response;
    if (id) {
      response = await fetch(fetchUrl + id, {
        method: "PUT",
        body: JSON.stringify(myProduct),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzdkMTRiY2RlMTAwMTc2MTZhOTUiLCJpYXQiOjE2MDUxMDIzNTksImV4cCI6MTYwNjMxMTk1OX0.33fI9bSkGvFEm4gg5UVRhx2Pqrdm5Z3kNE04BOVm4tg",
        }),
      });
    } else {
      response = await fetch(fetchUrl, {
        method: "POST",
        body: JSON.stringify(myProduct),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzdkMTRiY2RlMTAwMTc2MTZhOTUiLCJpYXQiOjE2MDUxMDIzNTksImV4cCI6MTYwNjMxMTk1OX0.33fI9bSkGvFEm4gg5UVRhx2Pqrdm5Z3kNE04BOVm4tg",
        }),
      });
    }
    if (response.ok) {
      // checking the ok property which stores the successful result of the operation
      alert(`Product ${id ? "updated" : "created"} successfully`);
      spinner.classList.toggle("d-none");
      location.assign("index.html");
    } else {
      spinner.classList.toggle("d-none");
      alert("Something went wrong!");
    }
  } catch (err) {
    console.log(err);
  }
};
