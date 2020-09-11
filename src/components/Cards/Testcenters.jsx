import React from "react";
import { Card, CardContent, Grid } from '@material-ui/core';
import styles from "./Cards.module.css";
import CardComponent from './Card/Card';

const Testcenters = () => {
return (
<div className={styles.overflow}>
<Grid container spacing={0} justify="center">
         <Grid item component={Card} className={styles.CardforTest}>
             <CardContent >
             <iframe src="https://maps.mapmyindia.com/corona?safety_alert" allow="geolocation;" className={styles.iframe}></iframe>
             </CardContent>
         </Grid>
         </Grid>
</div>
)

}

export default Testcenters;