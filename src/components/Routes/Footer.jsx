import React from "react";
import styles from './App.module.css';
import { NavLink } from "react-router-dom";

const Footer = () => {

return (

          <div className={styles.footer}>
           
           <NavLink to={"/"} className={styles.home}>
           <div className={styles.footerdiv}>
           <img style={{margin:"0px 5px -1px 5px"}} src="https://img.icons8.com/nolan/100/home-page.png" alt="icon" />
           </div>
           </NavLink>

           <NavLink to={"/stats"} className={styles.home}>
           <div className={styles.footerdiv}>
           <img style={{margin:"0px 5px -1px 5px"}} src="https://img.icons8.com/nolan/100/combo-chart" alt="icon" />     
           </div>
           </NavLink>

           <NavLink to={"/testcenters"} className={styles.home}>
           <div className={styles.footerdiv}>
           <img style={{margin:"0px 5px -1px 5px"}} src="https://img.icons8.com/nolan/100/test-passed.png" alt="icon" />
           </div>
           </NavLink>

           <NavLink to={"/charts"} className={styles.home}>
           <div className={styles.footerdiv}>
           <img style={{margin:"0px 5px -1px 5px"}} src="https://img.icons8.com/nolan/100/pie-chart.png" alt="icon" />
           </div>
           </NavLink>
           <NavLink to={"/helplinenumbers"} className={styles.home}>
           <div className={styles.footerdiv}>
           <img style={{margin:"0px 5px -1px 5px"}} src="https://img.icons8.com/nolan/100/phone.png" alt="icon" />
           </div>
           </NavLink>

           <NavLink to={"/safetycheck"} className={styles.home}>
           <div className={styles.footerdiv}>
           <img style={{margin:"0px 5px -1px 5px"}} src="https://img.icons8.com/nolan/100/security-configuration.png" alt="icon" />
           </div>
           </NavLink>
          
          </div> 

    )
}

export default Footer;