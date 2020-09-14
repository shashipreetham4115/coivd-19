import React,{useState} from "react";
import { CardContent, Grid } from '@material-ui/core';
import styles from "./Cards.module.css";
import Loader from 'react-loader-spinner';
import Header from "./Header";
import Footer from "./Footer";

const SafetyCheck = () => {
const[Show , setShow] = useState(true)
const func1 = () => setShow(false); 
setTimeout(() => {
    func1()
    }, 4000);
return (

<div className={styles.overflow}>
<Header />
<Grid container spacing={0} justify="center">
       
            <CardContent >
            
            <iframe title="hai" src="https://maps.mapmyindia.com/corona?safety_alert" allow="geolocation;" style={Show ? { display : "none"} : { display : "block" }} className={styles.iframe}></iframe> 
            
            {Show ?  <h1 style={{color:"aqua",textAlign:"center",fontSize:"2.5rem"}}> Loading...!<Loader type="ThreeDots" color="aqua"  height="100" width="100"/></h1> : null}
            
            </CardContent>
        </Grid>
<Footer />
</div>
)
}

export default SafetyCheck;