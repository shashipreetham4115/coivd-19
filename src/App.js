import React from "react";
import Loader from 'react-loader-spinner';

import Title from "./Title";
import {fetchLocApiData} from "./api/"; 
import Cards from "./components/Cards/Cards";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    ldata: {},
    isActive:false
    }
  async componentDidMount() {
 const Ldata =await fetchLocApiData();
this.setState({ldata:Ldata});
        setTimeout(() => {
          if((Ldata.s) !== undefined) {
              this.setState({isActive:true});
             
           }  else {
               window.location.reload(true);
              }
        }, 10000);
  }
  
render() {
         const {ldata} =this.state;

    return (
      <div className={styles.container}>
      <Title/>     
      {this.state.isActive ? <Cards data={ldata} />: <h1 style={{color:"blue",textAlign:"center",fontSize:"2.5rem"}}> Loading...!<Loader type="ThreeDots" color="blue"  height="200" width="200"/></h1>
        }
       </div>
       
    );
  
      
}

 
}


export default App;



