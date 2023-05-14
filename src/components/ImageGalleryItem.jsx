
import css from './ImageGallery.module.css'

export const ImageGalleryItem = (({tag, webformatURL, largeImageURL}) => {

      <li className={css.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt={tag}
              data_img={largeImageURL}
              className={css.ImageGalleryItem_image}
              />
      </li>
    }
    )


