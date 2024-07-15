import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            title="${description}"
          />
        </a>
      </li>
    `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "title", // Folosește atributul alt pentru caption
  captionDelay: 250, // Întârziere de 250ms pentru afișarea caption-ului
});

console.log(galleryItems);