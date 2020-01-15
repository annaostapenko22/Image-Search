import React, { Component } from "react";
import { getAllImages } from "../../services/services";
import Searchbar from "../search-bar/Searchbar"
import ImageGallery from "../image-gallery/ImageGallery"
import styles from "./App.module.css"
import LoadMoreButton from "../load-more-btn/LoadMoreButton"
class App extends Component {
  state = {
    imgItems: [],
    value: ''
  };
  onSubmit =(value)=> {
this.setState({value: value})
  }
  render() {

    getAllImages(this.state.value).then(data => this.setState({ imgItems: data }));

    return (
      <div className={styles.App}>
          <Searchbar value={this.onSubmit}/>
          <ImageGallery items={this.state.imgItems}/>
          <LoadMoreButton />
      </div>
    );
  }
}

export default App;

// webformatURL
// id
