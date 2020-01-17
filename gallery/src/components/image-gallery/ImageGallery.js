import React, { Component } from "react";
import styles from "./ImageGallery.module.css";
import shortId from "short-id";

export default class ImageGallery extends Component {
  state = {
    isModalOpened: false,
    source: null
  };

  componentWillMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyPressed.bind(this));
  }

  onKeyPressed(evt) {
    if (evt.keyCode === 27) {
      this.setState({ isModalOpened: false });
    }
  }
  openModal = evt => {
    this.setState({ isModalOpened: true });
    const modalWindowImg = evt.target.getAttribute("data-source");
    this.setState({ source: modalWindowImg });
  };

  closeModal = evt => {
    if (evt.target.nodeName === "IMG") {
      return;
    }
    this.setState({ isModalOpened: false });
  };

  render() {
    const { items } = this.props;
    const { isModalOpened } = this.state;
    return (
      <>
        {isModalOpened && (
          <div
            className={styles.Overlay}
            onClick={evt => this.closeModal(evt)}
            onKeyDown={this.onKeyPressed}
          >
            <div className={styles.Modal} id="modal">
              <img
                src={this.state.source}
                alt=""
                id="modalIMG"
                onKeyDown={() => console.log("work")}
              />
            </div>
          </div>
        )}
        <ul className={styles.ImageGallery}>
          {items.map(item => (
            <li
              key={shortId.generate()}
              className={styles.ImageGalleryItem}
              onClick={evt => this.openModal(evt)}
            >
              <img
                src={item.webformatURL}
                data-source={item.largeImageURL}
                className={styles.ImageGalleryItem_image}
                alt="image"
              ></img>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
