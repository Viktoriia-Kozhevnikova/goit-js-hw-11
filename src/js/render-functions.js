import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export function displayImages(data, gallery) {
    gallery.innerHTML = "";

    if (data.hits.length === 0) {
        iziToast.error({
            title: "No Results",
            message: "Sorry, there are no images matching your search query. Please try again!",
            timeout: 3000,
            position: "topRight"
        });
        return;
    }

    data.hits.forEach((image) => {
        const li = document.createElement("li");
        li.classList.add("gallery-item-wrapper");

        const link = document.createElement("a");
        link.href = image.largeImageURL;
        link.classList.add("gallery-item");

        const img = document.createElement("img");
        img.classList.add("img");
        img.src = image.webformatURL;
        img.alt = image.tags;

        const info = document.createElement("div");
        info.classList.add("container-properties");
        info.innerHTML = `
            <ul class="list-properties">
                <li class="properties"><p class="text"><strong>Likes</strong> ${image.likes}</p></li>
                <li class="properties"><p class="text"><strong>Views</strong> ${image.views}</p></li>
                <li class="properties"><p class="text"><strong>Comments</strong> ${image.comments}</p></li>
                <li class="properties"><p class="text"><strong>Downloads</strong> ${image.downloads}</p></li>
            </ul>
        `;
        link.appendChild(img);
        link.appendChild(info);
        li.appendChild(link);
        gallery.appendChild(li);
    });

    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new SimpleLightbox(".gallery a", {
            captions: true,
            captionsData: "alt",
            captionDelay: 250
        });
    }
}