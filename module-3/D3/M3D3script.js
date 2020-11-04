/* 1) When pressing on Load Images button, load the pictures from http://www.splashbase.co/api/v1/images/search?query=green
 */


/* const leadImg = function () {
    fetch("http://www.splashbase.co/api/v1/images/search?query=green", {
        method: "GET",
    }).then(response => console.log("can you pls work lo"))
} 

Why doesn't it work with methods? */

const loadImg = function () {
    fetch("http://www.splashbase.co/api/v1/images/search?query=green").then((response) =>
        response.json()
    ).then((imgs) => {
        console.log(imgs)
        let card = document.querySelectorAll(".card")
        let urlS = imgs.images.slice(0, card.length)
        for (let i = 0; i < card.length; i++) {
            document.querySelectorAll(".card")[i].innerHTML = `<img class="img-fluid" src="${urlS[i].url}">
                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                                View
                                            </button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                                Edit
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>`

        }

    })
}

let primarybtn = document.querySelector(".btn-primary")
primarybtn.onclick = function () {

    loadImg()

}

//2) When pressing on Load Seconday Images, load the pictures from http://www.splashbase.co/api/v1/images/search?query=your secondary query
//3) When the user clicks on the "VIEW" button inside the Card, open the specified image in a modal view
//We always get the last img because the modal loads after the page ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

//4) The Edit button should be replace with a "Hide" button. 
//5) When the hide button is pressed, the whole picture card disappears.

const loadSecImg = function () {
    fetch("http://www.splashbase.co/api/v1/images/search?query=blue").then((response) =>
        response.json()
    ).then((imgs) => {
        console.log(imgs)
        let card = document.querySelectorAll(".card")
        let urlS = imgs.images.slice(0, card.length)


        for (let i = 0; i < card.length; i++) {
            const hide = function () {
                document.querySelectorAll('.img-fluid')[1].classList.remove = 'img-fluid'
                document.querySelectorAll('.img-fluid')[1].clasList.add = 'd-none'

            }
            document.querySelectorAll(".card")[i].innerHTML = `<img class="img-fluid" src="${urlS[i].url}">
                                <div class="card-body">
                                    <p class="card-text">
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#imgmodal">
                                            
                                                View
                                            </button>
                                            <button type="button" class="btn btn-sm btn-outline-secondary" onclick= "hide">
                                                Hide 
                                            </button>
                                        </div>
                                        <small class="text-muted">9 mins</small>
                                    </div>
                                </div>
                                <div class="modal" tabindex="-1" id="imgmodal">`

            document.querySelector(".modal-body").innerHTML = `<img class="img-fluid" src="${urlS[i].url}">`
        }

    })
}

let secbtn = document.querySelector(".btn-secondary")
secbtn.onclick = function () {

    loadSecImg()

}
/* const hideImg = function () {
    const node = e.currentTarget; 

    const firstParent = node.parentElement;
    const secondParent = firstParent.parentElement;
    const thirdParent = secondParent.parentElement;
    const fourthParent = thirdParent.parentElement;

    const imgnode = fourthParent.querySelector("img");
    let imgnodestyle = imgnode.style.display
    if (imgnodestyle === "none") {
        imgnodestyle = "block"
    } else imgnodestyle = "none"

}
let hidebtn = document.querySelectorAll(".card .btn:last-of-type")
for (let i = 0; i < hidebtn.length; i++) {
    hidebtn[i].onclick = hideImg
} */

// 4) The Edit button should be replace with a "Hide" button. 
//5) When the hide button is pressed, the whole picture card disappears.