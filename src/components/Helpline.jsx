import React, { useState } from "react";
import styles from "./Cards.module.css";
import Loader from 'react-loader-spinner';
import Header from "./Header";
import Footer from "./Footer";
import AnimatedInput from "./AnimatedInput1";

const TestCenters = ({ data }) => {
    const [State1, setState1] = useState({ s: "Loading..." });
    const [State2, setState2] = useState({ search: "" });
    console.log(State2);
    console.log(State1);
    return (
        <div style={{ textAlign: "center", marginTop: "18%", marginBottom: "17%" }}>
            <Header />
            {(data.s === "Loading...") ?
                <h1 style={{ color: "green", textAlign: "center", fontSize: "2.5rem" }}> Loading...!<Loader type="ThreeDots" color="green" height="100" width="100" /></h1>
                :
                <div>
                    {(State1.s === "Loading...") ?
                        <div>
                            <div className={styles.searching}>
                                <img src="https://img.icons8.com/nolan/25/google-web-search.png" className={styles.searchimg} alt="icon" />
                                <AnimatedInput type="text" className={styles.search} onChange={event => setState2({ search: event.target.value })} placeholder={data.hndata} />
                            </div>
                            {(data.hndata.filter((tldata) => { return tldata.loc.toLowerCase().indexOf((State2.search).toLowerCase()) !== -1; })).map((tldata, index) => {
                                return (

                                    <div className={styles.selfcard} key={index} onClick={
                                        () => {
                                            setState1(tldata.number);
                                            setState2({search:""});
                                        }
                                    }>
                                        <br />
                                        <h5 style={{ margin: 0, color: " rgba(0, 0, 0, 0.744)", fontSize: "100%" }}>{tldata.loc}</h5>
                                        <br />
                                    </div>

                                )
                            })
                            }

                        </div>
                        : <div>
                                 <button className={styles.button} onClick={
                                () => {
                                    setState1({ s: "Loading..." })
                                }
                            }>Back</button>
                                    <div className={styles.selfcard}>
                                        <br />
                                        <h5 style={{ margin: 0, color: " rgba(0, 0, 0, 0.744)" }}>{State1}</h5>
                                        <a href={"tel:"+{State2}+""} ><img alt="icon" src="https://img.icons8.com/nolan/34/phone.png"/></a>
                                        <br />
                                    </div>
                        </div>
                    }
                </div>
            }
            <Footer />
        </div>
    )
}

export default TestCenters;