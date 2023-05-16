
import css from './ImageGallery.module.css'

export const ImageGalleryItem = (({tags, webformatURL, largeImageURL}) => {
  return (
   <li className={css.ImageGalleryItem}>
            <img
              src={webformatURL}
              alt={tags}
              data_img={largeImageURL}
              className={css.ImageGalleryItem_image}
              />
      </li>
)

    }
    )


