import React from "react";
import styles from "./Cards.module.css";
import Loader from 'react-loader-spinner';
import Header from "./Header";
import Footer from "./Footer";

const TestCenters = ({ data }) => {

return (
    <div style={{textAlign:"center",marginTop:"18%",marginBottom:"17%"}}>
    <Header />
    {(data.s === "Loading...") ?
        <h1 style={{ color: "green", textAlign: "center", fontSize: "2.5rem" }}> Loading...!<Loader type="ThreeDots" color="green" height="100" width="100" /></h1>
        :
        <div className={styles.overflow}>
        <h3 style={{textAlign:"center"}}>{data.tldata[1].state}</h3>
            {data.tldata.map((tldata,i) => {
                return (
                    <div className={styles.selfcard}>
                    <br/>
                    <h5 key={i} style={{margin:0}}>{tldata.name}</h5>
                    <br/>
                    </div>               
                )
            })}
        </div>
    }
    <Footer />
        </div>
)
}

export default TestCenters;