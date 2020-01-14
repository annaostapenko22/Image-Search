import React, {Component} from 'react'
import {getAllImages} from "../../services/services"
class App extends Component {
    state = { 
        imgItems: []
     }
 
    render() {
       getAllImages().then(data=>{
          console.log(data)
          return data;
      })
            // console.log(this.state.imgItems)

        return (
        <>
           <ul></ul>
            </>
        );
    }
}

export default App;

// webformatURL
// id