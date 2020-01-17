import React, { Component } from "react";
import { getAllImages } from "../../services/services";
import Searchbar from "../search-bar/Searchbar";
import ImageGallery from "../image-gallery/ImageGallery";
import styles from "./App.module.css";
import LoadMoreButton from "../load-more-btn/LoadMoreButton";
import Loader from "react-loader-spinner";
class App extends Component {
  state = {
    imgItems: [],
    value: "",
    page: 1,
    isLoading: false,
    hasError: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      if (prevState.value !== this.state.value) {
        this.setState({ imgItems: [], page: 1 });
      }
      this.setState({ isLoading: true });
      getAllImages(this.state.value, this.state.page).then(data => {
        this.setState(prevState => ({
          imgItems: [...prevState.imgItems, ...data],
          isLoading: false
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      });
    }
  }

  onSubmit = value => {
    this.setState({ value: value });
  };
  incrementPage = page => {
    this.setState({ page });
  };
  render() {
    const { isLoading } = this.state;
    console.log(this.state.imgItems);
    return (
      <div className={styles.App}>
        <Searchbar value={this.onSubmit} />
        <ImageGallery items={this.state.imgItems} />
        {this.state.imgItems.length > 0 && (
          <LoadMoreButton
            page={this.incrementPage}
            currentPage={this.state.page}
          />
        )}
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
            className={styles.Loader}
          />
        )}
      </div>
    );
  }
}

export default App;
