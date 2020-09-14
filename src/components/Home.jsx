import React from "react";
import Header from "./Header";
import styles from "./App.module.css";
import ButtonCard from "./ButtonCard";
import Footer from "./Footer";


function Home() {
return (
    <div className={styles.container}>
    <Header />
     
      <div  style={{marginBottom:"100px",marginTop:"25%"}}>
      <ButtonCard
        titleofBtn="Stats"
        link={"/stats"}
        descriptionoftitle="COVID-19 stats by your location"
        iconfortitle="https://img.icons8.com/nolan/35/group-of-projects.png"
        />
      <ButtonCard
      link={"/testcenters"}
        titleofBtn="TestCenter"
        iconfortitle="https://img.icons8.com/nolan/35/test-passed.png"
        descriptionoftitle="TestCenter near your location"
        />
      <ButtonCard
      link={"/stats"}
        titleofBtn="Symptoms Checker"
        descriptionoftitle="Checks for Covid-19 symptoms"
        iconfortitle="https://img.icons8.com/nolan/35/checked-2.png"
       />
      <ButtonCard
      link={"/stats"}
        titleofBtn="Helpline Numbers"
        descriptionoftitle="National and state Helpline numbers"
        iconfortitle="https://img.icons8.com/nolan/35/phone-disconnected.png"
      />
    
      <ButtonCard
      link={"/safetycheck"}
        titleofBtn="Safety Check"
        descriptionoftitle="Safety checker from Mapmyindia.com"
        iconfortitle="https://img.icons8.com/nolan/35/security-configuration.png"
      />
       </div>
     <Footer /> 
    </div>
)
}

export default Home;