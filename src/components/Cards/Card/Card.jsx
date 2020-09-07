import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Card.module.css';

const CardComponent = ({ contentHead,contentBody, cardTitle, cData, sData, dData, country,state,district,lastUpdate }) => (
    <div className={styles.card}>
    <Grid container spacing={0}  justify="center">
    <Grid item component={Card} className={styles.main}>
    <Grid item component={Card}>
        <CardContent className={contentHead}>
            <Typography variant="h5">{cardTitle}</Typography>
            
        </CardContent>
    </Grid>
        <CardContent className={contentBody}>
            <Typography variant="h6">{country}&nbsp;:&nbsp;<CountUp start={0} end={cData} duration={2} separator=","></CountUp></Typography>
            <Typography variant="h6">{state}&nbsp;:&nbsp;<CountUp start={0} end={sData} duration={2} separator=","></CountUp></Typography>
            <Typography variant="h6">{district}&nbsp;:&nbsp;<CountUp start={0} end={dData} duration={2} separator=","></CountUp></Typography>
            {/* <Typography color="textSecondary" gutterBottom>last updated</Typography> */}
        </CardContent>
   
    <Grid item component={Card}>
        <CardContent className={contentHead}>
            <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
        </CardContent>
        </Grid>    
    </Grid>
    </Grid>
    </div>
);


export default CardComponent;
