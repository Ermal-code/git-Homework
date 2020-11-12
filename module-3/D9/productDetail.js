let id = null;
const fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";

const createDetail = (item) => {
  return `<div class="imgDiv col-12 col-md-6  my-3 border-right border-warning d-flex align-items-center justify-content-center" data-toggle="modal"
  data-target="#exampleModal${item._id}">
  
  <img class="img-fluid" src="${item.imageUrl}" style="height:300px"  />
</div>
<div class="contentDetail col-12 col-md-6 d-flex my-3  flex-column justify-content-start">
  <h2><strong class="text-info">Name: </strong>${item.name}</h2>
  <p>
    <h3 class="d-inline"><strong>Description: </strong></h3>${item.description}</p>
  <h3 class="text-secondary"><strong>Brand: </strong>${item.brand}</h3>
  <h3 class="text-warning"><strong>Price: </strong>$ ${item.price}</h3>
  <div class="d-flex justify-content-around">
  <button type="button" class="btn btn-info my-3" onclick="editProduct('${item._id}')">Edit Product</button>
  <button type="button" class="btn btn-danger my-3" onclick='deleteProduct()'>Delete Product</button>
  </div>
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
                <div class="modal-body  d-flex justify-content-center position-relative">
                  <img src="${item.imageUrl}"  class="img-fluid" style="height:300px"> 
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger"  data-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
`;
};

const getFetch = async () => {
  let url = new URLSearchParams(window.location.search);
  id = url.get("id");
  let rowCol = document.querySelector(".col-md-8 .row");

  try {
    let response = await fetch(fetchUrl + id, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzdkMTRiY2RlMTAwMTc2MTZhOTUiLCJpYXQiOjE2MDUxMDAxNTAsImV4cCI6MTYwNjMwOTc1MH0.2fXnELbbS946VA1iQx0AfegsZzfNRcSpZ0vozxd-kYU",
      },
    });

    let product = await response.json();
    console.log(product);
    rowCol.innerHTML = createDetail(product);
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async () => {
  try {
    const response = await fetch(fetchUrl + id, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiYzdkMTRiY2RlMTAwMTc2MTZhOTUiLCJpYXQiOjE2MDUxMDIzNTksImV4cCI6MTYwNjMxMTk1OX0.33fI9bSkGvFEm4gg5UVRhx2Pqrdm5Z3kNE04BOVm4tg",
      }),
    });
    if (response.ok) {
      // checking the ok property which stores the successful result of the operation
      alert("Product deleted successfully");
      location.assign("index.html");
    } else {
      alert("Something went wrong!");
    }
  } catch (err) {
    console.log(err);
  }
};

const editProduct = (productId) => {
  window.open("backoffice.html?id=" + productId);
};

window.onload = () => {
  getFetch();
};
