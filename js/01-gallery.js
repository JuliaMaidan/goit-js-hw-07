import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const galleryItemsMarkup = addItemsToGallery(galleryItems)

function addItemsToGallery(items) {
    return items.map(({ preview, original, description, }) =>     `
    <a 
    class="gallery__link"
    href="${original}">
    <img
    class="gallery__image"
    src="${preview}" 
    data-source="${original}" 
    alt="${description}"
    />
    </a>
    `).join('')
}

gallery.innerHTML = galleryItemsMarkup

gallery.addEventListener('click', (event) => {
    if (event.target.nodeName !== 'IMG') {
    return;
    } else {
        event.preventDefault()
        const bigImgUrl = event.target.dataset.source
        console.log(bigImgUrl)

    const instance = basicLightbox.create(`
    <img src="${bigImgUrl}" width="1280">`)
        instance.show()
    }
})

console.log(galleryItems);
