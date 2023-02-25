// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const cardsMarkup = createImagesCardsMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryPictureClick);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// function that creates markup
function createImagesCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` 
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        `;
    }).join('');

    return markup

}

   const lightbox = new SimpleLightbox(`.gallery a`, {
        loop: true,
        captionsData: `alt`,
        captionPosition: 'bottom',
        captionDelay: 250,
        showCounter: false,
    });

 
function onGalleryPictureClick(e) {
    e.preventDefault()
    
    const isGalleryImageEl = e.target.nodeName

    if (isGalleryImageEl !== 'IMG') {
        return;
    };

 

    console.log(e.target.alt);

}

