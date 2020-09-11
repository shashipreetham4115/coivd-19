import React from "react";
import { Card, CardContent, Grid } from '@material-ui/core';
import styles from "./App.module.css";

const Buttons = ({onclickfunction,titleofBtn}) => {
return (
<div>
<div className={styles.king}>
    <Grid container spacing={0} justify="center" onClick={onclickfunction}>
       <Grid item component={Card} className={styles.main}>
        <CardContent className={styles.main1}>
          <s className={styles.title1}>{titleofBtn}</s>
        </CardContent>
       </Grid>
      </Grid>
</div>
</div>
)
}

export default Buttons;
