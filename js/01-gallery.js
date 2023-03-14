import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageGallery = document.querySelector('.gallery');
console.log(imageGallery);
const galleryItem = galleryItems.map(image => `<a class="gallery_link" href="${image.original}">
<img class="gallery_image" src= "${image.preview}" data-source= "${image.original}" alt="${image.description}"></a>`).join("");
imageGallery.insertAdjacentHTML("beforeend", galleryItem);
console.log(galleryItem);
