import React from "react";
import { Card, CardContent, Typography , Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup" ;
import Slider from 'infinite-react-carousel';
import Iframe from 'react-iframe';


const Cards = ({data}) => {
  
  console.log(data);
    const settings ={
    arrows:false,
    dots:false,
    autoplay:true,
   
  }
 return (
     
     <div>
     <div className={styles.container}>
     <Grid container spacing={0} justify="center">
         <Grid item component={Card} className={styles.main1}>
         <Grid item component={Card}>
             <CardContent className={styles.content4}>
             <h1 className={styles.title}>STATS</h1>
             </CardContent>
         </Grid>
             <CardContent  className={styles.sugg}>
     <Slider {...settings} className={styles.slider}>

         <div className={styles.card}>
         <Grid container spacing={0}  justify="center">
         <Grid item component={Card} className={styles.main}>
         <Grid item component={Card}>
             <CardContent className={styles.content}>
                 <Typography variant="h5">Infected</Typography>
                 
             </CardContent>
         </Grid>
             <CardContent className={styles.infected}>
                 <Typography variant="h6">{data.c}:<CountUp start={0} end={data.cdata.confirmed} duration={2} separator=","></CountUp></Typography>
                 <Typography variant="h6">{data.s}:<CountUp start={0} end={data.sdata.confirmed} duration={2} separator=","></CountUp></Typography>
                 <Typography variant="h6">{data.d}:<CountUp start={0} end={data.ddata.confirmed} duration={2} separator=","></CountUp></Typography>
                 {/* <Typography color="textSecondary" gutterBottom>last updated</Typography> */}
             </CardContent>
        
         <Grid item component={Card}>
             <CardContent className={styles.content}>
                 <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
             </CardContent>
             </Grid>    
         </Grid>
         </Grid>
         </div>
       

         <div className={styles.card}>
         <Grid container spacing={0}  justify="center">
         <Grid item component={Card} className={styles.main}>
         <Grid item component={Card}>
             <CardContent className={styles.content1}>
             <Typography variant="h5">Recovered</Typography>
             </CardContent>
         </Grid>
             <CardContent  className={styles.recovered}>
                 <Typography variant="h6">{data.c}:<CountUp start={0} end={data.cdata.recovered} duration={2} separator=","></CountUp></Typography>
                 <Typography variant="h6">{data.s}:<CountUp start={0} end={data.sdata.recovered} duration={2} separator=","></CountUp></Typography>
                 <Typography variant="h6">{data.d}:<CountUp start={0} end={data.ddata.recovered} duration={2} separator=","></CountUp></Typography>            
                 {/* <Typography color="textSecondary" gutterBottom>last updated</Typography> */}
                  </CardContent>
        
         <Grid item component={Card}>
             <CardContent className={styles.content1}>
                 <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
             </CardContent>
             </Grid>    
         </Grid>
         </Grid>
         </div>
         <div className={styles.card}>
         <Grid container spacing={0}  justify="center">
         <Grid item component={Card} className={styles.main}>
         <Grid item component={Card}>
             <CardContent className={styles.content2}>
             <Typography variant="h5">Deaths</Typography>
             </CardContent>
         </Grid>
             <CardContent  className={styles.deaths}>
                 <Typography variant="h6">{data.c}:<CountUp start={0} end={data.cdata.deaths} duration={2} separator=","></CountUp></Typography>
                 <Typography variant="h6">{data.s}:<CountUp start={0} end={data.sdata.deceased} duration={2} separator=","></CountUp></Typography>
                 <Typography variant="h6">{data.d}:<CountUp start={0} end={data.ddata.deceased} duration={2} separator=","></CountUp></Typography>
                 {/* <Typography color="textSecondary" gutterBottom>last updated</Typography> */}
                 </CardContent>
         
         <Grid item component={Card}>
             <CardContent className={styles.content2}>
                 <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
             </CardContent>
             </Grid>    
         </Grid>
         </Grid>
         </div>
        </Slider>
        </CardContent>
        
        
        <Grid item component={Card}>
             <CardContent className={styles.content4}>
             <h1 className={styles.title}>suggestions and measures</h1>
             </CardContent>
         </Grid>
         <Grid container spacing={0} justify="center">
         <Grid item component={Card} className={styles.main1}>
         <Grid item component={Card}>
             <CardContent className={styles.content4}>
                 <Iframe src=" http://www.google.com/search?igu=1&ei=&q=covid+test+centers+near+me"
                       width="550px"
                        height="550px"
                         id="myId"
                       className="myClassname"
                       display="initial"
                       position="relative"
                    //    http://www.google.com/search?igu=1&ei=&q=covid+test+centers+near+me
                  />
             </CardContent>
         </Grid>
         </Grid>
         </Grid>
         </Grid>
         </Grid>
     
     </div>
     <div>
         
     </div>
     </div>
 )

        }




export default Cards;