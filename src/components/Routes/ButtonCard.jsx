import React from "react";
import { Card, CardContent,Grid } from '@material-ui/core';
import styles from "./App.module.css";
import { NavLink } from "react-router-dom";

const Buttons = ({ link , titleofBtn, descriptionoftitle, iconfortitle }) => {
return (
  
  <div>
    <div style={{marginBottom:"7%"}}>
      <Grid container spacing={0} justify="center" >
      <NavLink to={link} className={styles.home}>
        <Grid item component={Card} className={styles.main}>
          <CardContent className={styles.main1}>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "-15px" }}>
              <img src={iconfortitle} alt="icon" />
              <h5 className={styles.title1}>{titleofBtn}</h5>
              <h6 className={styles.title2}>{descriptionoftitle}</h6>
            </div>
          </CardContent>
        </Grid>
        </NavLink>
      </Grid>
    </div>
  </div>
)
}

export default Buttons;
// "https://img.icons8.com/nolan/35/test-passed.png"