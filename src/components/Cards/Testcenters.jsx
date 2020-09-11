import React,{useState} from "react";
import { Card, CardContent, Grid } from '@material-ui/core';
import styles from "./Cards.module.css";
import Loader from 'react-loader-spinner';

const Testcenters = () => {
const[Show , setShow] = useState(true)
    const func1 = () => setShow(false);
//    var hai =  
    setTimeout(() => {
        func1()
      }, 4000);
return (
   
<div className={styles.overflow}>
<Grid container spacing={0} justify="center">
         <Grid item component={Card} className={styles.CardforTest}>
             <CardContent >
             
              <iframe title="hai" src="https://maps.mapmyindia.com/corona?safety_alert" allow="geolocation;" style={Show ? { display : "none"} : { display : "block" }} className={styles.iframe}></iframe> 
             
              {Show ?  <h1 style={{color:"blue",textAlign:"center",fontSize:"2.5rem"}}> Loading...!<Loader type="ThreeDots" color="blue"  height="200" width="200"/></h1> : null}
             
             </CardContent>
         </Grid>
         </Grid>
</div>
)

}

export default Testcenters;