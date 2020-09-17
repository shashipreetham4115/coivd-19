import React from "react";
// import styles from "./Cards.module.css";
import Loader from 'react-loader-spinner';
import Header from "./Header";
import Footer from "./Footer";
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d';
import drilldown from "highcharts/modules/drilldown";
highcharts3d(Highcharts);
drilldown(Highcharts);

const Charts = ({ data }) => {
    var easeOutBounce = function (pos) {
        if ((pos) < (1 / 2.75)) {
            return (7.5625 * pos * pos);
        }
        if (pos < (2 / 2.75)) {
            return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
        }
        if (pos < (2.5 / 2.75)) {
            return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
        }
        return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
    };
    
    Math.easeOutBounce = easeOutBounce;
    const options = {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 40,
                beta: 0
            }
        },
        title: {
            text: 'Pie Chart for Indian covid Stats'
        },
        subtitle: {
            text: 'Click the Slices to view stats for each State or long press to view total stats in Inida'
        },
        plotOptions: {
            pie: {
                depth: 40,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                },
            
            },
            series: {
                cursor: 'pointer',
                animation: {
                    duration: 2000,
                    easing: 'easeOutBounce'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'India',
            dataLabels: {
                enabled: false,
                format: '{point.name}'
            },
            showInLegend: true,
            data: data.india
        }],
        drilldown: {
            series: [{
                id: 'confirmed',
                data: data.confirmed
            }, {
                id: 'recovered',
                data:data.recovered
            }, {
                id: 'deaths',
                data: data.deaths
            }]
        }

    }
    return (
        <div style={{ textAlign: "center", marginTop: "29%", marginBottom: "17%" }}>
            <Header />
            {(data.s === "Loading...") ?
                <h1 style={{ color: "green", textAlign: "center", fontSize: "2.5rem" }}> Loading...!<Loader type="ThreeDots" color="green" height="100" width="100" /></h1>
                :
                 <div>
                        <HighchartsReact highcharts={Highcharts} options={options} />
                 </div>
            }
            <Footer />
        </div>
    )
}

export default Charts;