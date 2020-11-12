const handleSubmit = (e) => {
  e.preventDefault(); // preventing the default browser event handling
  submitProduct();
};

const url = "https://striveschool-api.herokuapp.com/api/product/";

const submitProduct = async () => {
  let myProduct = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    brand: document.querySelector("#brand").value,
    imageUrl: document.querySelector("#imageUrl").value,
    price: document.querySelector("#price").value,
  };

  try {
    let fetchURL = await fetch(url, {
      method: "POST",
      body: JSON.stringify(myProduct),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzdkMTRiY2RlMTAwMTc2MTZhOTUiLCJpYXQiOjE2MDUxMDIzNTksImV4cCI6MTYwNjMxMTk1OX0.33fI9bSkGvFEm4gg5UVRhx2Pqrdm5Z3kNE04BOVm4tg",
      }),
    });
    if (fetchURL.ok) {
      // checking the ok property which stores the successful result of the operation
      alert("Product created successfully");
      location.assign("index.html");
    } else {
      alert("Something went wrong!");
    }
  } catch (err) {
    console.log(err);
  }
};
