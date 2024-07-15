import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
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
  }).join('');
}

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageSource = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageSource}" width="800" height="600">
  `, {
    onShow: (instance) => {
      document.addEventListener('keydown', onEscKeyPress);

      function onEscKeyPress(event) {
        if (event.code === 'Escape') {
          instance.close();
          document.removeEventListener('keydown', onEscKeyPress);
        }
      }
    }
  });

  instance.show();
}