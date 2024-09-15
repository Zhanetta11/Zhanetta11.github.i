const imgElement = document.querySelector("img");

const img1URL = "img/img1.jpg";
const img2URL = "img/img12.jpg"; 

function changePhoto() {
    let current = imgElement.getAttribute("src");
    
    if (current === img1URL) {
        imgElement.setAttribute("src", img2URL);
    } else {
        imgElement.setAttribute("src", img1URL);
    }
}

if (imgElement) {
    imgElement.onclick = changePhoto;
} else {
    console.error("No <img> element found on the page.");
}