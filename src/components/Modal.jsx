import { Component } from "react";
import { createPortal } from 'react-dom';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';


const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component{
  state = {};

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === 'escape') {
      this.props.onClose()
    }
  }

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
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
