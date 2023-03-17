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
    const showOriginalImage = event.target.dataset.original;
    galleryElements.src = `${image.original}`;

}

imageGallery.addEventListener("click", showOriginalImage);

/*
    const showOriginalImage = event.target.dataset.original;
    Elements.src = `${image.original}`;
}*/

    
