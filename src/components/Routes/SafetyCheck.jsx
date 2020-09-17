import React from "react";
import { CardContent, Grid } from '@material-ui/core';
import styles from "./Cards.module.css";
import Header from "./Header";
import Footer from "./Footer";

const SafetyCheck = () => {
return (

<div className={styles.SafetyCheck}>
<Header />
<Grid container spacing={0} justify="center">
       
            <CardContent >
            
            <iframe title="hai" src="https://maps.mapmyindia.com/corona?safety_alert" allow="geolocation;" className={styles.iframe}></iframe> 
            
            </CardContent>
        </Grid>
<Footer />
</div>
)
}

export default SafetyCheck;