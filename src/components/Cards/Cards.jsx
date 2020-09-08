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
     <Grid container spacing={0} justify="center">
         <Grid item component={Card} className={styles.main1}>
         <Grid item component={Card}>
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
        
        
        <Grid item component={Card}>
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
