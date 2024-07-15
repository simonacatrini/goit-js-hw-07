import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.innerHTML = galleryItemsMarkup;

galleryContainer.addEventListener("click", onGalleryItemClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
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
    `;
    })
    .join("");
}

function onGalleryItemClick(event) {
  event.preventDefault();

  const isGalleryImage = event.target.classList.contains("gallery__image");
  if (!isGalleryImage) return;

  const imageSource = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageSource}">
  `);

  console.log("Modal instance created", instance);

  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance.visible()) {
      instance.close();
      console.log("Modal closed");
    }
  });
}

console.log(galleryItems);