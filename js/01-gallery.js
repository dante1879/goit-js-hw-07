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
                data-source="${original}"
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

// Add listener to ul
galleryList.addEventListener("click", onCardItemClick);

function onCardItemClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const itemOriginal = evt.target.dataset.source;
  const itemDescr = evt.target.description;

  const instance = basicLightbox.create(
    `
                    <div class="gallery__item">
                    <img
                    class="gallery__image"
                    src="${itemOriginal}"
                    alt="${itemDescr}"
                    />
                    </div>`,
    {
      onShow: () => window.addEventListener("keydown", closeByEsc),
      onClose: () => window.removeEventListener("keydown", closeByEsc),
    }
  );
  instance.show();

  function closeByEsc(ev) {
    if (ev.code === "Escape") {
      instance.close();
    }
  }
}
