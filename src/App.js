import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./components/Routes/Cards";
import SafetyCheck from "./components/Routes/SafetyCheck";
import TestCenters from "./components/Routes/TestCenters";
import { BrowserRouter,Switch, Route} from "react-router-dom";
import Home from "./components/Routes/Home";
import Helpline from "./components/Routes/Helpline";
import Charts from "./components/Routes/Charts"

function App() {
  const [state1, setstate1] = useState({ s: "Loading..." });
 
  useEffect(() => {
    const fetchData = async () => {
      var x = document.getElementById("shashi");
      const data = await axios(
        x.innerHTML.replace("amp;", "")
      );
      const data2 = await axios(
        `https://api.covid19india.org/v4/data.json`
      );
      const data3 = await axios(
        `https://api.covid19india.org/state_district_wise.json`
      );
      const data4 = await axios(
        `https://api.rootnet.in/covid19-in/hospitals/medical-colleges`
      );
      const data5 = await axios(
        `https://api.rootnet.in/covid19-in/contacts`
      );
      const data6 = await axios(
        `https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise`
      );
      let s = await data.data.addresses[0].address.countrySubdivision;
      let d = await data.data.addresses[0].address.countrySecondarySubdivision;
      let c = await data.data.addresses[0].address.country;
      let ddata = data3.data[s].districtData[d];
      let sc = data3.data[s].statecode;
      let sdata = data2.data[sc].total;
      let tldata1 = data4.data.data.medicalColleges;
      let hndata = data5.data.data.contacts.regional;
      let tldata = [];
      let confirmed = [];
      let recovered = [];
      let deaths = [];
      let pieData = data6.data.data;
      for (var i = 0; i <= tldata1.length - 2; i++) {
        const j=i+1;
        if (tldata1[i].state === tldata1[j].state) {
          continue;
        }
        else{
          tldata.push(tldata1[i].state);
        }
      }
      tldata.push(tldata1[tldata1.length-1].state);
      let india = [];
      india.push({name:"Total Confirmed ("+pieData.total.confirmed+")",y:pieData.total.confirmed,drilldown:"confirmed"})
      india.push({name:"Total Recovered ("+pieData.total.recovered+")",y:pieData.total.recovered,drilldown:"recovered"})
      india.push({name:"Total Deaths ("+pieData.total.deaths+")",y:pieData.total.deaths,drilldown:"deaths"})
      for (var k=0; k <= pieData.statewise.length-1;k++){
        confirmed.push([data3.data[pieData.statewise[k].state].statecode,pieData.statewise[k].confirmed])
        recovered.push([data3.data[pieData.statewise[k].state].statecode,pieData.statewise[k].recovered])
        deaths.push([data3.data[pieData.statewise[k].state].statecode,pieData.statewise[k].deaths])
      }
      setstate1({ d, s, c, ddata, sdata,tldata1, tldata,hndata,pieData,confirmed,recovered,deaths,india});
    };
    setTimeout(() => {
      fetchData()
    }, 7000);
  }, []);


  return (
    
    <BrowserRouter>
    <div>
        <Switch>
        <Route exact={true} path="/">
            <Home/>
          </Route>
          <Route exact={true} path="/stats">
            <Cards data={state1} />
          </Route>
          <Route exact={true} path="/testcenters">
            <TestCenters data={state1} />
          </Route>
          <Route exact={true} path="/safetycheck">
            <SafetyCheck />
          </Route>
          <Route exact={true} path="/charts">
            <Charts data={state1}/>
          </Route>
          <Route exact={true} path="/helplinenumbers">
            <Helpline data={state1}/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
   

  );
}

export default App;



