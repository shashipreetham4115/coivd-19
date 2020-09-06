import React from "react";
import { Card, CardContent, Typography, Divider, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup" ;



const Cards1 = ({data2,data,data1,data3}) => {

 
 return (
     
     <div className={styles.container}>
      <div>
         <Grid container spacing={0}  justify="center">
         <Grid item component={Card} className={styles.main1}>
         <Grid item component={Card}>
             <CardContent className={styles.content4}>
             <Typography variant="h5">suggestions and measures to be taken</Typography>
             </CardContent>
         </Grid>
             <CardContent  className={styles.deaths1}>
                  
                 
                 {/* <Typography variant="h6">Worldwide:<CountUp start={0} end={data.deaths} duration={2} separator=","></CountUp></Typography>
                 <Typography variant="h6">{data3.s}:<CountUp start={0} end={data1.s.deceased} duration={2} separator=","></CountUp></Typography>
                 <Typography variant="h6">{data3.d}:<CountUp start={0} end={data2.deceased} duration={2} separator=","></CountUp></Typography> */}
                 {/* <Typography color="textSecondary" gutterBottom>last updated</Typography> */}
                 </CardContent>
         </Grid>
         </Grid>
         </div>
        
     </div>
 )

        }




export default Cards1;