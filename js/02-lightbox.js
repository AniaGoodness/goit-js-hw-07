import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGallery = document.querySelector('.gallery');
console.log(imageGallery);
const galleryElements = galleryItems.map((item) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" 
            src= "${item.preview}" 
            data-sourse= "${item.original}" 
            alt="${item.description}"/>
            </a>
            </li>`).join("");

imageGallery.insertAdjacentHTML("beforeend", galleryElements);

