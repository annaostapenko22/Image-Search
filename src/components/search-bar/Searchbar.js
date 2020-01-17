import React, { Component } from "react";
import styles from "./Searchbar.module.css";
class Searchbar extends Component {
  state = {
    value: ""
  };

  onHandleSubmit = evt => {
    evt.preventDefault();
    this.props.value(this.state.value);
    this.setState({ value: "" });
  };
  onHandleChange = evt => {
    this.setState({ value: evt.target.value });
  };
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className="SearchForm" onSubmit={this.onHandleSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleChange}
            value={this.state.value}
            onKeyDown={() => console.log("WOKRRR")}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
