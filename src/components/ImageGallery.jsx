import css from './ImageGallery.module.css'
import PropTypes from 'prop-types'
import { ImageGalleryItem } from './ImageGalleryItem';


export const ImageGallery = ({ picture, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
  {picture.map(({id, tag, webformatURL, largeImageURL}) => {
    return (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        name={tag}
        largeImageURL={largeImageURL}
        onClick = {openModal}
      />
  )
  }
  )}
    </ul>
    );
};
ImageGallery.propTypes = {
   picture: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tag: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  openModal: PropTypes.func
};
