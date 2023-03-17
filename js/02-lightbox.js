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

const showOriginalImage = (event) => {
    event.preventDefault();
        if (event.target.nodeName !== "IMG") {
        return;
    }
    const showOriginalImage = event.target.getAttribute("data-sourse");
    const instance = basicLightbox.create(`<img src="${showOriginalImage}" width="800" height="600">`);
    instance.show();
        
    window.addEventListener("keydown", (event) => {

                    if (event.key === "Escape") {
					    instance.close();
					}
				});
}
    imageGallery.addEventListener("click", showOriginalImage);
