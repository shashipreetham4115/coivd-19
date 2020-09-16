import React, { useState } from "react";
import styles from "./Cards.module.css";
import Loader from 'react-loader-spinner';
import Header from "./Header";
import Footer from "./Footer";
import AnimatedInput from "./AnimatedInput";

const TestCenters = ({ data }) => {
    const [State1, setState1] = useState({ s: "Loading..." });
    const [State2, setState2] = useState({ search: "" });
    console.log(State2);
    // const [State3, setState3] = useState();
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
                                <AnimatedInput type="text" className={styles.search} onChange={event => setState2({ search: event.target.value })} placeholder={data.tldata} />
                            </div>
                            {(data.tldata.filter((tldata) => { return tldata.toLowerCase().indexOf((State2.search).toLowerCase()) !== -1; })).map((tldata, index) => {
                                return (

                                    <div className={styles.selfcard} key={index} onClick={
                                        () => {
                                            const testdata = [];
                                            for (var i = 0; i <= data.tldata1.length - 1; i++) {
                                                if (tldata === data.tldata1[i].state) {
                                                    testdata.push(data.tldata1[i].name);
                                                }
                                            }
                                            setState1(testdata);
                                            setState2({search:""});
                                        }
                                    }>
                                        <br />
                                        <h5 style={{ margin: 0, color: " rgba(0, 0, 0, 0.744)", fontSize: "100%" }}>{tldata}</h5>
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
                            {State1.map((tldata, index) => {
                                return (
                                    <div className={styles.selfcard} key={index}>
                                        <br />
                                        <h5 key={index} style={{ margin: 0, color: " rgba(0, 0, 0, 0.744)" }}>{tldata}</h5>
                                        <br />
                                    </div>
                                )
                            })
                            }
                        </div>
                    }
                </div>
            }
            <Footer />
        </div>
    )
}

export default TestCenters;