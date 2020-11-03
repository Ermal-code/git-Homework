window.onload = () => {
  let ulElement = document.querySelector(".bg_grad ul");
  fetch("https://rapidapi.p.rapidapi.com/search?q=eminem", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dc976bef57mshfe1863c26e99ba2p1cc559jsn861f89a53ff3",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((parseJson) => console.log(parseJson))
    .then((data) => {
      let artists = data.response;
      return artists.map((artist) => {
        let liElement = document.createElement("li");
        let imgElement = document.createElement("img");

        imgElement.src = artist.md5_image;
        ulElement.appendChild(liElement);
        liElement.appendChild(imgElement);
      });
    });
};
