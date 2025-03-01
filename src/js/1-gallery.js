const images = [
  {
    smallImage:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    largeImage:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    ImageDescription: 'Hokkaido Flower',
  },
  {
    smallImage:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    largeImage:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    ImageDescription: 'Container Haulage Freight',
  },
  {
    smallImage:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    largeImage:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    ImageDescription: 'Aerial Beach View',
  },
  {
    smallImage:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    largeImage:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    ImageDescription: 'Flower Blooms',
  },
  {
    smallImage:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    largeImage:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    ImageDescription: 'Alpine Mountains',
  },
  {
    smallImage:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    largeImage:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    ImageDescription: 'Mountain Lake Sailing',
  },
  {
    smallImage:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    largeImage:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    ImageDescription: 'Alpine Spring Meadows',
  },
  {
    smallImage:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    largeImage:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    ImageDescription: 'Nature Landscape',
  },
  {
    smallImage:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    largeImage:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    ImageDescription: 'Lighthouse Coast Sea',
  },
];

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
// gallery.addEventListener('click', openModal);

const galleryItems = images
  .map(
    ({
      smallImage,
      largeImage,
      ImageDescription,
    }) => `   <li class="gallery-item">
        <a class="gallery-link" href="${largeImage}">
          <img
            class="gallery-image"
            src='${smallImage}'
            data-source="${largeImage}"
            alt='${ImageDescription}'
          />
        </a>
      </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryItems);
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

// const modal = basicLightbox.create(`
//     <img src="" width="800" height="600">
// `);

// function openModal(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }
//   const img = modal.element().querySelector('img');
//   img.src = event.target.dataset.source;
//   img.alt = event.target.alt;

//   modal.show();
// }
