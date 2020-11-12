const cardItem = (item) => {
  return `<div class="card mb-4 shadow-lg border border-success" style="min-height:400px">
  <img class="img-fluid p-2" style="height:250px" src="${item.imageUrl}">
  <div class="card-body border border-success" style="background-color:#f6fefc">
  <div style="height:70px" >
      <p>
        <strong class="text-info">Name</strong>: ${item.name}
      </p>
      </div>
 
    <p class="card-text text-truncate">${item.description}</p>
    
    
      <p class="text-dark"><strong>Brand</strong>: ${item.brand}</p>
      <h5 class="text-warning"><strong>Price</strong>: $${item.price}</h5>
      <button type="button" class="btn btn-outline-warning my-3" onclick="goToDetails('${item._id}')">View details</button>
 </div>
 `;
};
const fetchFunc = async () => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/product/",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzdkMTRiY2RlMTAwMTc2MTZhOTUiLCJpYXQiOjE2MDUxMDAxNTAsImV4cCI6MTYwNjMwOTc1MH0.2fXnELbbS946VA1iQx0AfegsZzfNRcSpZ0vozxd-kYU",
        },
      }
    );

    let product = await response.json();

    let row = document.querySelector(".row");

    row.innerHTML = "";

    product.reverse().forEach((element) => {
      let col = document.createElement("div");
      col.classList.add("col-12", "col-md-4", "col-lg-3");
      col.innerHTML = cardItem(element);
      row.append(col);
    });
    console.log(product);
  } catch (err) {
    console.log(err);
  }
};

const goToDetails = (id) => {
  window.open("productDetail.html?id=" + id);
};

window.onload = () => {
  fetchFunc();
};
