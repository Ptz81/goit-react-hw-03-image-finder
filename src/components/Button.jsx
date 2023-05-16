import css from './ImageGallery.module.css'
import PropTypes from 'prop-types'

export const Button = ({ handleLoadMore }) => {
  return (
          <button
            type="button"
            onClick={handleLoadMore}
            className={css.Button}
          >Load more</button>
  );
}
Button.propTypes = {
nameBtn: PropTypes.string.isRequired,
handleLoadMore: PropTypes.func.isRequired,
}
