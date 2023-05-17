import { Component } from "react";
import { createPortal } from 'react-dom';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal_root');
export class Modal extends Component{
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  }

  render() {

    return createPortal(
      <div
        className={css.overlay}
        onClick={this.handleBackdropClick}>
        <div className={css.modal}>
         {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
}
