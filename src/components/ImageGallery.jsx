import css from './ImageGallery.module.css'
import PropTypes from 'prop-types'
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <ul className={css.ImageGallery}>
  {images.map(({id, tag, webformatURL, largeImageURL}) => {
    return (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        name={tag}
        largeImageURL={largeImageURL}
        onClick = {handleOpenModal}
      />
  )
  }
  )}
    </ul>
    );
};
ImageGallery.propTypes = {
   images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tag: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  handleOpenModal: PropTypes.func
};
