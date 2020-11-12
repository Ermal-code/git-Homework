const cardItem = (item) => {
  return `<div class="card mb-4 shadow-lg border border-success" style="min-height:530px" data-toggle="modal" data-target="#exampleModal${item._id}">
  <img class="img-fluid p-4" style="height:250px" src="${item.imageUrl}">
  <div class="card-body border border-success">
  <div style="height:100px; overflow:hidden" >
    <p class="card-text">${item.description}</p>
    </div>
      <p>
          Name: ${item.name}
      </p>
      <p class="text-secondary">Brand: ${item.brand}</p>
      <h5 class="text-warning">Price: $${item.price}</h5>
 </div>

 <div class="modal fade" id="exampleModal${item._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${item.name}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img src="${item.imageUrl}"  class="img-fluid" style="height:300px"> 
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-success"  data-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
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

    product.forEach((element) => {
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

window.onload = () => {
  fetchFunc();
};
