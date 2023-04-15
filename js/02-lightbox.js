import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Create gallery markup
const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>
        `
    )
    .join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);


var simpleLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250
});

simpleLightbox.on("show.simplelightbox", function () {
  console.log("Image opened");
});
