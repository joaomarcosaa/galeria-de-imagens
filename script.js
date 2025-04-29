import { images } from "./dados.js";
const galleryContainer = document.querySelector('#gallery-container');
const loadMoreButton = document.querySelector('#load-more');
console.log(galleryContainer, loadMoreButton);
const imagesPerPage = 6;
let currentImageIndex = 0; 

function loadImages() {
    const pageImages = [ images[0], images[1], images[2], images[3], images[4], images[5] ];
console.log(pageImages);

pageImages.forEach(images => {

        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const imgItem = document.createElement('img');
        imgItem.src = images.src;
        imgItem.alt = images.alt;

        galleryContainer.appendChild(galleryItem);
        galleryItem.appendChild(imgItem);
})
}

loadMoreButton.addEventListener('click', loadImages);