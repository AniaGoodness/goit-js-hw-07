import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageGallery = document.querySelector('.gallery');
console.log(imageGallery);

const galleryElements = galleryItems.map((item) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery_image" src= "${item.preview}" data-source= "${item.original}" alt="${item.description}"/>
            </a>
            </div>`).join("");

imageGallery.insertAdjacentHTML("beforeend", galleryElements);


imageGallery.addEventListener("click", (event) => {
    event.preventDefault();
});

/*function selectImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMAGE") {
        return;
    }
    const selectedImage = event.target.dataset.original;
    galleryItem.src = `${image.original}`;
}*/

    
