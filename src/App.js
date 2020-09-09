import axios from "axios";
import React , {useState, useEffect} from "react";

import Title from "./Title";
// import fetchLocApiData from "./api/"; 
import Cards from "./components/Cards/Cards";
import styles from "./App.module.css";

function App() {
 
  const [state1, setstate1] = useState({s:"Loading..."}); 
   

    useEffect(() => {
      const fetchData = async () => {
        var x = document.getElementById("shashi");
        const data = await axios(
          x.innerHTML.replace("amp;" , "")
        );
        const data1 = await axios(
          `https://api.covidindiatracker.com/total.json`
        );
        const data2 = await axios(
          `https://api.covid19india.org/v4/data.json`
        );
        const data3 = await axios(
          `https://api.covid19india.org/state_district_wise.json`
        );
    let s = await data.data.addresses[0].address.countrySubdivision;
    let d =await  data.data.addresses[0].address.countrySecondarySubdivision;
    let c =await  data.data.addresses[0].address.country;
    let ddata =  data3.data[s].districtData[d];
    let sc =  data3.data[s].statecode;
    let sdata =  data2.data[sc].total;
    let lastUpdate =  data2.data[sc].meta.last_updated;
    let cdata =  data1.data;
    setstate1({d,s,c,ddata,sdata,lastUpdate,cdata})
        };
        setTimeout(() => {fetchData();}, 6000);
    }, []);
        // setTimeout(() => {
        //   if((Ldata.s) !== undefined) {
        //       this.setState({isActive:true});
        //    }
        // }, 6000);
  
  
    return (
      <div className={styles.container}>
      <Title />     
      <Cards data={state1} />
      </div>
       
    );
    }
 



export default App;



