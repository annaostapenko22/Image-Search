import React, { Component } from "react";
import styles from "./LoadMore.module.css";
class LoadMoreButton extends Component {
  state = {
    page: 2
  };


  componentDidMount(){
      console.log("render")
  }


  handleClick = () => {
    console.log("click");
    this.setState((state)=> {
        const res = {
            page: state.page + 1
        }
        return res;
    })
    this.props.page(this.state.page)
   console.log(this.state)
  };

  render() {

    
    return (
      <button className={styles.Button} onClick={()=>this.handleClick()}>
        Load more
      </button>
    );
  }
}

export default LoadMoreButton;
