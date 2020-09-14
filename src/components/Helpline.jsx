import React from "react";
import styles from "./Cards.module.css";
import Loader from 'react-loader-spinner';
import Header from "./Header";
import Footer from "./Footer";

const Helpline = ({ data }) => {

return (
    <div style={{textAlign:"center",marginTop:"18%",marginBottom:"17%"}}>
    <Header />
    {(data.s === "Loading...") ?
        <h1 style={{ color: "green", textAlign: "center", fontSize: "2.5rem" }}> Loading...!<Loader type="ThreeDots" color="green" height="100" width="100" /></h1>
        :
        <div className={styles.overflow}>
        {/* <h3 style={{textAlign:"center"}}>{data.tldata[1].state}</h3> */}
            {data.hndata.map((hndata,i) => {
                return (
                    <div className={styles.selfcard}  key={i}>
                    <br/>
                    <h4 style={{margin:0}}>{hndata.loc}</h4>
                    <h5 style={{margin:0}}>{hndata.number}</h5>
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

export default Helpline;