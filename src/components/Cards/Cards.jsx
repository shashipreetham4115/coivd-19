import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import Slider from 'infinite-react-carousel';
import CardComponent from './Card/Card';

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
     <Grid container spacing={7} justify="center">
         <Grid item component={Card} className={styles.main1}>
         <Grid item component={Card} container spacing={7} justify="center">
             <CardContent className={styles.content4}>
             <h1 className={styles.title}>STATS</h1>
             </CardContent>
         </Grid>
             <CardContent  className={styles.sugg}>
         <Slider {...settings} className={styles.slider}>
              <CardComponent
              contentHead={styles.content}
              contentBody={styles.infected}
              cardTitle="Infected"
              cData={data.cdata.confirmed}
              sData={data.sdata.confirmed}
              dData={data.ddata.confirmed}
              country={data.c}
              state={data.s}
              district={data.d}
              lastUpdate={data.lastUpdate}
              />
               <CardComponent
              contentHead={styles.content1}
              contentBody={styles.recovered}
              cardTitle="Recovered"
              cData={data.cdata.recovered}
              dData={data.ddata.recovered}
              sData={data.sdata.recovered}
              country={data.c}
              state={data.s}
              district={data.d}
              lastUpdate={data.lastUpdate}
              />
               <CardComponent
              contentHead={styles.content2}
              contentBody={styles.deaths}
              cardTitle="Deaths"
              cData={data.cdata.deaths}
              sData={data.sdata.deceased}
              dData={data.ddata.deceased}
              country={data.c}
              state={data.s}
              district={data.d}
              lastUpdate={data.lastUpdate}
              />
        
         </Slider>
         </CardContent>
        
        
        <Grid item component={Card} container spacing={7} justify="center">
             <CardContent className={styles.content4}>
             <h1 className={styles.title}>In INDIA</h1>
             </CardContent>
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

// {/* <div className={styles.card}>
// <Grid container spacing={0}  justify="center">
// <Grid item component={Card} className={styles.main}>
// <Grid item component={Card}>
//     <CardContent className={styles.content}>
//         <Typography variant="h5">Infected</Typography>
        
//     </CardContent>
// </Grid>
//     <CardContent className={styles.infected}>
//         <Typography variant="h6">{data.c}&nbsp;:&nbsp;<CountUp start={0} end={data.cdata.confirmed} duration={2} separator=","></CountUp></Typography>
//         <Typography variant="h6">{data.s}&nbsp;:&nbsp;<CountUp start={0} end={data.sdata.confirmed} duration={2} separator=","></CountUp></Typography>
//         <Typography variant="h6">{data.d}&nbsp;:&nbsp;<CountUp start={0} end={data.ddata.confirmed} duration={2} separator=","></CountUp></Typography>
//         {/* <Typography color="textSecondary" gutterBottom>last updated</Typography> */}
//     </CardContent>

// <Grid item component={Card}>
//     <CardContent className={styles.content}>
//         <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
//     </CardContent>
//     </Grid>    
// </Grid>
// </Grid>
// </div>


// <div className={styles.card}>
// <Grid container spacing={0}  justify="center">
// <Grid item component={Card} className={styles.main}>
// <Grid item component={Card}>
//     <CardContent className={styles.content1}>
//     <Typography variant="h5">Recovered</Typography>
//     </CardContent>
// </Grid>
//     <CardContent  className={styles.recovered}>
//         <Typography variant="h6">{data.c}&nbsp;:&nbsp;<CountUp start={0} end={data.cdata.recovered} duration={2} separator=","></CountUp></Typography>
//         <Typography variant="h6">{data.s}&nbsp;:&nbsp;<CountUp start={0} end={data.sdata.recovered} duration={2} separator=","></CountUp></Typography>
//         <Typography variant="h6">{data.d}&nbsp;:&nbsp;<CountUp start={0} end={data.ddata.recovered} duration={2} separator=","></CountUp></Typography>            
//         {/* <Typography color="textSecondary" gutterBottom>last updated</Typography> */}
//          </CardContent>

// <Grid item component={Card}>
//     <CardContent className={styles.content1}>
//         <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
//     </CardContent>
//     </Grid>    
// </Grid>
// </Grid>
// </div>
// <div className={styles.card}>
// <Grid container spacing={0}  justify="center">
// <Grid item component={Card} className={styles.main}>
// <Grid item component={Card}>
//     <CardContent className={styles.content2}>
//     <Typography variant="h5">Deaths</Typography>
//     </CardContent>
// </Grid>
//     <CardContent  className={styles.deaths}>
//         <Typography variant="h6">{data.c}&nbsp;:&nbsp;<CountUp start={0} end={data.cdata.deaths} duration={2} separator=","></CountUp></Typography>
//         <Typography variant="h6">{data.s}&nbsp;:&nbsp;<CountUp start={0} end={data.sdata.deceased} duration={2} separator=","></CountUp></Typography>
//         <Typography variant="h6">{data.d}&nbsp;:&nbsp;<CountUp start={0} end={data.ddata.deceased} duration={2} separator=","></CountUp></Typography>
//         {/* <Typography color="textSecondary" gutterBottom>last updated</Typography> */}
//         </CardContent>

// <Grid item component={Card}>
//     <CardContent className={styles.content2}>
//         <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
//     </CardContent>
//     </Grid>    
// </Grid>
// </Grid>
// </div> */}