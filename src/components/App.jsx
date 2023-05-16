import React, { Component } from "react";
import Notiflix from 'notiflix';
import { Searchbar } from "./Searchbar";
import { fetchImages } from "Source/Api";
import Loader from "./Loader";
import { Button } from "./Button";
import { ImageGallery } from "./ImageGallery";
import { Modal } from "./Modal";
import css from './ImageGallery.module.css'


export class App extends Component{

   state = {
    name: '',
    loader: false,
    picture: [],
    openModal: false,
    button: false,
    page: 1,
    modalImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
      if (prevQuery !== nextQuery) {
      this.getImages();
    }
  }

getImages=()=>{
 fetchImages(this.state.query, this.state.page)
  .then((picture) => {
    this.setState({loader: true})
    if(picture.length===0){
Notiflix.Notify.failure(`No images for ${this.state.query}`)
    }
    if(picture.length>=12){
      this.setState({button: true})
    }else{
      this.setState({button: false})}
    this.setState((prevState)=>(
      {page: prevState.page + 1,
        picture: [...prevState.picture, ...picture]}))})
  .catch(error=> console.log(error))
  .finally(() => {

    this.setState({ loader: false });
  });
}


  handleFormSubmit = searchQuery => {
    this.setState({
      name: searchQuery,
      page: 1,
      picture:[]
    });
  };

  handlePagination = () => {
      this.setState((prevState) => ({ page: prevState.page + 1 }));
  }
  toggleImage = () => {
   this.setState((openModal)=>({openModal:!openModal}))
}

   handleOpenModal=(largeImage)=>{
   this.setState({
     modalImg: largeImage
   })
   this.toggleImage()
 }

  render(){
    const { loader, picture, openModal, button, modalImg } = this.state;

    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {picture.length >= 1 &&
          <ImageGallery
            items={picture}
            modalImg={this.openModal}
          />}
        {openModal &&
          <Modal
            src={modalImg}
            onClick={this.toggleImage}
            onClose={this.toggleImage} />}
          {loader &&
          <Loader className={css.loader}
          />}
        {button &&
          <Button onClick={this.handlePagination}/>}

    </div>
  );
  }

};
