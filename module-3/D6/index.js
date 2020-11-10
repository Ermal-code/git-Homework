let drowpdownLinks = document.querySelectorAll(".dropdown-menu a");
let actionBtn = document.querySelector(".input-group-prepend .btn");
let filterInput = document.querySelector(".input-group input[type='text']");
filterInput.placeholder = "Filter by name";

for (let i = 0; i < drowpdownLinks.length; i++) {
  drowpdownLinks[i].onclick = () => {
    actionBtn.innerText = drowpdownLinks[i].innerText;
    filterInput.placeholder =
      "Filter by " + drowpdownLinks[i].innerText.toLowerCase();
  };
}

const userCard = (userInfo) => {
  return `<div class="card mb-3">
    <div class="card-header text-info" >
      Name: ${userInfo.name}
    </div>
    <div class="card-header text-danger"  >
      Username: ${userInfo.username}
    </div>
    <div class="card-header text-success"  >
      Email: ${userInfo.email}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Adress: ${Object.values(
        userInfo.address
      ).join(" ")}</li>
      <li class="list-group-item">Phone: ${userInfo.phone}</li>
      <li class="list-group-item">Company: ${userInfo.company.name}</li>
      <li class="list-group-item">Website: ${userInfo.website}</li>
    </ul>
  </div>`;
};

let query = "";

const handleSearchQuery = (event) => {
  query = event.target.value.toLowerCase();
};

const fetchUsers = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let users = await response.json();

    nameArray(users);

    let row = document.querySelector(".row");
    let user = [];

    if (query !== "") {
      if (actionBtn.innerText === "Name") {
        user = users.filter((res) => res.name.toLowerCase().includes(query));
      } else if (actionBtn.innerText === "Username") {
        user = users.filter((res) =>
          res.username.toLowerCase().includes(query)
        );
      } else {
        user = users.filter((res) => res.email.toLowerCase().includes(query));
      }
    } else {
      user = [...users];
    }

    row.innerHTML = "";

    user.forEach((element) => {
      delete element.address.geo;
      let col = document.createElement("div");
      col.classList.add("col-12", "col-md-6", "col-lg-4");

      col.innerHTML = userCard(element);

      row.appendChild(col);
      addressArray(element);
    });
  } catch {
    (err) => console.log(err);
  }
};

window.onload = () => {
  fetchUsers();
};

const addressArray = (address) => {
  delete address.address.geo;
  let addressEl = Object.values(address.address).join(", ");

  addressArr.push(addressEl);
};

const nameArray = (names) => {
  nameArr = names.map((res) => res.name);
};

let addressArr = [];
let nameArr = [];
