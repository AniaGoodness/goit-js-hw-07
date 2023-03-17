import { galleryItems } from './gallery-items.js';
// Change code below this line


const imageGallery = document.querySelector('.gallery');
console.log(imageGallery);

const galleryElements = galleryItems.map((item) => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" 
            src= "${item.preview}" 
            data-source= "${item.original}" 
            alt="${item.description}"/>
            </a>
            </div>`).join("");

imageGallery.insertAdjacentHTML("beforeend", galleryElements);

const showOriginalImage = (event) => {
    event.preventDefault();
        if (event.target.nodeName !== "IMAGE") {
        return;
    }
    const showOriginalImage = event.target.getAttribute("data-sourse")
    const instance = basicLightbox.create(`<img src="${showOriginalImage}" width="800" height="600">`);
    instance .show();
}
    imageGallery.addEventListener("click", showOriginalImage);

/*
    const showOriginalImage = event.target.getAttribute("data-sourse")
    galleryElements.src = `${image.original}`;
}*/

    
