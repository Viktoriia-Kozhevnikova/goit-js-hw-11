import { fetchImages } from "./js/pixabay-api.js";
import { displayImages } from "./js/render-functions.js";

const form = document.querySelector(".form");
const input = document.querySelector(".search");
const button = document.querySelector(".btn");
const loader = document.querySelector(".loader");
const gallery = document.querySelector(".gallery");
let lightbox;

input.addEventListener("input", checkButtonState);
form.addEventListener("submit", formSubmit);

function showLoader() {
    loader.style.display = "block";
}

function hideLoader() {
    loader.style.display = "none";
}

function checkButtonState() {
    button.disabled = input.value.trim() === "";
}

function formSubmit(event) {
    event.preventDefault();
    const query = input.value.trim();

    if (query === "") {
        iziToast.error({
            title: "Error",
            message: "Please enter a search query.",
            timeout: 3000,
            position: "topRight"
        });
        return;
    }
    
    showLoader();

    fetchImages(query)
        .then(data => {
            displayImages(data, gallery);
        })
        .catch(error => {
            iziToast.error({
                title: "Error",
                message: "An error occurred while fetching images. Please try again!",
                timeout: 3000,
                position: "topRight"
            });
        })
        .finally(() => {
            hideLoader();
        });
}



// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// const form = document.querySelector(".form");
// const input = document.querySelector(".search");
// const button = document.querySelector(".btn");
// const loader = document.querySelector(".loader");
// const URL = "https://pixabay.com/api/";
// const API_KEY = "45141895-b62da3b06f4b18f1184207a2c";
// let lightbox;

// input.addEventListener("input", checkButtonState);
// form.addEventListener("submit", formSubmit);

// function showLoader() {
//     loader.style.display = "block";
// }

// function hideLoader() {
//     loader.style.display = "none";
// }

// function checkButtonState() {
//     if (input.value.trim() === "") {
//         button.disabled = true;
//     } else {
//         button.disabled = false;
//     }
// }

// checkButtonState();

// function formSubmit(event) {
//     event.preventDefault();
//     const query = input.value.trim();

//     if (query === "") {
//         iziToast.error({
//             title: "Error",
//             message: "Please enter a search query.",
//             timeout: 3000,
//             position: "topRight"
//         });
//         return;
//     }
//     fetchImages(query);
// }

// function fetchImages(query) {
//     showLoader();

//     const params = new URLSearchParams({
//         key: API_KEY,
//         q: query,
//         image_type: "photo",
//         orientation: "horizontal",
//         safesearch: true,
//     });

//     fetch(`${URL}?${params}`)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(response.status);
//             }
//             return response.json();
//         })
//         .then((data) => {
//             const gallery = document.querySelector(".gallery");
//             gallery.innerHTML = "";

//             if (data.hits.length === 0) {
//                 iziToast.error({
//                     title: "No Results",
//                     message: "Sorry, there are no images matching your search query. Please try again!",
//                     timeout: 3000,
//                     position: "topRight"
//                 });
//                 return;
//             }

//             data.hits.forEach((image) => {
//                 const li = document.createElement("li");
//                 li.classList.add("gallery-item-wrapper");
                
//                 const link = document.createElement("a");
//                 link.href = image.largeImageURL;
//                 link.classList.add("gallery-item");

//                 const img = document.createElement("img");
//                 img.classList.add("img");
//                 img.src = image.webformatURL;
//                 img.alt = image.tags;

//                 const info = document.createElement("div");
//                 info.classList.add("container-properties");
//                 info.innerHTML = `
//                     <ul class="list-properties">
//                         <li class="
// properties"><p class="text"><strong>Likes</strong> ${image.likes}</p></li>
//                         <li class="
// properties"> <p class="text"><strong>Views</strong> ${image.views}</p></li>
//                         <li class="
// properties"><p class="text"><strong>Comments</strong> ${image.comments}</p></li>
//                         <li class="
// properties"><p class="text"><strong>Downloads</strong> ${image.downloads}</p></li>
//                     </ul>
//                 `;

//                 link.appendChild(img);
//                 link.appendChild(info);
//                 li.appendChild(link);
//                 gallery.appendChild(li);
//             });

//             if (lightbox) {
//                 lightbox.refresh();
//             } else {
//                 lightbox = new SimpleLightbox(".gallery a", {
//                     captions: true,
//                     captionsData: "alt",
//                     captionDelay: 250
//                 });
//             }
//         })
//         .catch((error) => {
//             iziToast.error({
//                 title: "Error",
//                 message: "An error occurred while fetching images. Please try again!",
//                 timeout: 3000,
//                 position: "topRight"
//             });
//         })
//         .finally(() => {
//             hideLoader();
//         });
// }