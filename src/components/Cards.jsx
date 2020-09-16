import React from "react";
import { Card, CardContent, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import Slider from 'infinite-react-carousel';
import CardComponent from './Card/Card';
import Loader from 'react-loader-spinner';
import Header from "./Header";
import Footer from "./Footer";

const Cards = ({data}) => {
const settings = {
    arrows: false,
    dots: false,
    autoplay: true,

}
return (

    <div className={styles.overflow}>
     <Header />
        <div className={styles.container}>
            <Grid container spacing={0} justify="center">
                <Grid item component={Card} className={styles.main1}>
                    <Grid item component={Card}>
                        <CardContent className={styles.content4}>
                            <h1 className={styles.title}>STATS</h1>
                        </CardContent>
                    </Grid>
                    <CardContent className={styles.sugg}>
                        {(data.s === "Loading...") ?
                            <h1 style={{ color: "green", textAlign: "center", fontSize: "2.5rem" }}> Loading...!<Loader type="ThreeDots" color="green" height="100" width="100" /></h1>
                            :
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
                        }
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
        <Footer />
        </div>
    </div>
)

}




export default Cards;
