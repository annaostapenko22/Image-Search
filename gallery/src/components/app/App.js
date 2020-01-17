import React, { Component } from "react";
import { getAllImages } from "../../services/services";
import Searchbar from "../search-bar/Searchbar";
import ImageGallery from "../image-gallery/ImageGallery";
import styles from "./App.module.css";
import LoadMoreButton from "../load-more-btn/LoadMoreButton";
class App extends Component {
  state = {
    imgItems: [],
    value: "",
    page: 1
  };
  componentDidMount() {
    // if(this.state.page) {

    //   getAllImages(this.state.value, this.state.page).then(data =>
    //     this.setState(prevState => ({ imgItems: [...prevState.imgItems, ...data] })))
    // }
    
  }
  // data => this.setState((state)=>({
  //   imgItems: state.imgItems + data
  // })));
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      getAllImages(this.state.value, this.state.page).then(data => {
        this.setState(prevState => ({
          imgItems: [...prevState.imgItems, ...data]
        }));
      });
    }
  }

  onSubmit = value => {
    this.setState({ value: value });
  };
  incrementPage = page => {
    this.setState({ page: page });
  };
  render() {
    console.log(this.state.imgItems);
    return (
      <div className={styles.App}>
        <Searchbar value={this.onSubmit} />
        <ImageGallery items={this.state.imgItems} />
        <LoadMoreButton page={this.incrementPage} />
      </div>
    );
  }
}

export default App;

// webformatURL
// id
