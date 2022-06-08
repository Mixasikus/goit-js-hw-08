import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery');
const galleryItemEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/></a>`
  )
  .join('');

galleryListEl.insertAdjacentHTML('beforeend', galleryItemEl);

new SimpleLightbox('.gallery a');
