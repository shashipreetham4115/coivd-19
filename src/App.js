import React from "react";
import Loader from 'react-loader-spinner';

import Title from "./Title";
import { fetchCountryData , fetchDistrictData ,fetchLocApiData, fetchStatesData} from "./api/"; 
import Cards from "./components/Cards/Cards";
import styles from "./App.module.css";




class App extends React.Component {
  state = {
    cdata: {},
    sdata: {},
    ldata: {},
    ddata: {},
    s:{},
    isActive:false
    }

  // handleHide = () =>{
  //     this.setState({
  //         isActive: false
  //     })
  // }
  
  async componentDidMount() {
   

    const Ldata =await fetchLocApiData();
   // const Ndata =await fetchDSnData();
   
    const Cdata =await fetchCountryData();
    
      this.setState({cdata:Cdata});
     const Sdata =await fetchStatesData();
     const Ddata =await fetchDistrictData();
     this.setState({ddata:Ddata});
     
   
    this.setState({pdata:Ldata});
   
   
    
    this.setState({sdata : Sdata});
  
 
 
        if((Ldata.s) !== undefined) {
        this.setState({isActive:true})
        } else {
          setTimeout(() => {
            window.location.reload(true);
          }, 5000);
        }
  }

render() {
         const {cdata,ddata,pdata,sdata} =this.state;

    
    return (
        <div className={styles.container}>
       
        <Title />
        {
          this.state.isActive ?  
          <div>
          <Cards data={cdata} data1={sdata} data2={ddata} data3={pdata} />
           </div>
         :
          <h1 style={{color:"blue",textAlign:"center",fontSize:"4rem"}}> Loading...!<Loader type="ThreeDots" color="blue"  height="200" width="200"/></h1> 
          }
        {/* <Picker />
        <Chart /> */}
       
        </div>
    );
      
}


 
}

export default App;



