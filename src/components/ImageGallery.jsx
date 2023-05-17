// import css from './ImageGallery.module.css'
// import PropTypes from 'prop-types'
// import { ImageGalleryItem } from './ImageGalleryItem';


// export const ImageGallery = ({ items, openModal }) => {
//   return (
//     <ul className={css.ImageGallery}>
//       {items.map(({ id, tag, webformatURL, largeImageURL }) => {
//         return (
//           <ImageGalleryItem
//             key={id}
//             webformatURL={webformatURL}
//             name={tag}
//             largeImageURL={largeImageURL}
//             onClick={openModal}
//           />
//         );
//       })}
//     </ul>
//   );
// };

// ImageGallery.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       tag: PropTypes.string.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//     })
//   ),
//   openModal: PropTypes.func,
// };


import React from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ items, openModal }) => {
  return (
    <ul className={css.imageGallery}>
      {items.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
          onClick={() => openModal(largeImageURL)}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func,
};
