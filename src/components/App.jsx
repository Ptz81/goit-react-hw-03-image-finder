import React, { Component } from "react";
import { Searchbar } from "./Searchbar";
// import { fetchPhotos } from 'Source/Api';
// import Loader from "./Loader";
// import { Button } from "./Button";
// import { ImageGallery } from "./ImageGallery";


export class App extends Component{

  state = {
    name: ''
  }



  handleFormSubmit = searchQuery => {
    if(searchQuery !== this.state.name){
  this.setState({ name: searchQuery, status: "pending", page: 1 });
    }
  };


  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

    </div>
  );
  }

};
