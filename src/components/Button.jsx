import css from './ImageGallery.module.css'
import PropTypes from 'prop-types'

export const Button = ({ nameBtn, handleLoadMore }) => {
  return (
          <button
            type="button"
            onClick={handleLoadMore}
            className={css.Button}
          >{nameBtn}</button>
  );
}
Button.propTypes = {
nameBtn: PropTypes.string.isRequired,
handleLoadMore: PropTypes.func.isRequired,
}
