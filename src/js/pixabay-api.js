const URL = "https://pixabay.com/api/";
const API_KEY = "45141895-b62da3b06f4b18f1184207a2c";

export function fetchImages(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });

    return fetch(`${URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}