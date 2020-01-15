import React, { Component } from 'react';
import styles from "./LoadMore.module.css"
class LoadMoreButton extends Component {
    state = {  }
    render() {
        return (
           <button className={styles.Button}>Load more</button> 
        );
    }
}

export default LoadMoreButton;