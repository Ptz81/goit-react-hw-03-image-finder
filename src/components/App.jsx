import React, { Component } from "react";
import Notiflix from 'notiflix';
import { Searchbar } from "./SearchBar/Searchbar";
import { fetchImages } from "Source/Api";
import Loader from "./Loader/Loader";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import css from './ImageGallery.module.css';

function scroll() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });
}
export class App extends Component {
  state = {
    query: '',
    loader: false,
    pictures: [],
    openModal: false,
    button: false,
    page: 1,
    modalImg: '',
    modalAlt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    if (prevQuery !== nextQuery) {
      this.getImages();
    }
  }

  getImages = () => {
    fetchImages(this.state.query, this.state.page)
      .then((response) => {
        const hits = response || [];
        this.setState((prevState) => ({
          loader: true,
          pictures:
            prevState.page === 1 ? hits : [...prevState.pictures, ...hits],
          button: hits.length >= 12,
        }));
        if (hits.length === 0) {
          Notiflix.Notify.failure(`No images for ${this.state.query}`);
        }
        scroll();
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ loader: false });
      });
  };

  handleFormSubmit = (searchQuery) => {
    this.setState({
      query: searchQuery,
      page: 1,
      pictures: [],
    });
  };

  handlePagination = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }), this.getImages);
  };

  toggleImage = () => {
    this.setState((prevState) => ({ openModal: !prevState.openModal }));
  };

handleOpenModal = (largeImageURL) => {
  this.setState({
    modalImg: largeImageURL,
  });
  this.toggleImage();
};


  render() {
    const { loader, pictures, openModal, button, modalImg } = this.state;

    return (
      <div className={css.app}>
        {openModal && (
          <Modal src={modalImg} onClose={this.toggleImage} />
        )}
        <Searchbar onSubmit={this.handleFormSubmit} />
        {pictures.length >= 1 && (
          <ImageGallery items={pictures} openModal={this.handleOpenModal} />
        )}
        {button && (
          <Button handleLoadMore={this.handlePagination} />
        )}
        {loader && (
          <Loader className={css.loader} />
        )}

      </div>
    );
  }
}
