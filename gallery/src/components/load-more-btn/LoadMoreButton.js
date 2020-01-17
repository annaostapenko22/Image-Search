import React, { Component } from "react";
import styles from "./LoadMore.module.css";
class LoadMoreButton extends Component {
  state = {
    page: this.props.currentPage
  };

  componentDidMount() {
    console.log("render");
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.props.page(this.state.page);
    }
  }

  handleClick = () => {
    this.setState(state => ({
      page: state.page + 1
    }));

    console.log("page", this.state);
  };

  render() {
    return (
      <button className={styles.Button} onClick={() => this.handleClick()}>
        Load more
      </button>
    );
  }
}

export default LoadMoreButton;
