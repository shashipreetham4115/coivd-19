import axios from "axios";
import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import SafetyCheck from "./SafetyCheck";
import TestCenters from "./TestCenters";
import { BrowserRouter,Switch, Route} from "react-router-dom";
import Home from "./Home";
import Helpline from "./Helpline";
import Symptoms from "./SymptomChecker"

function App() {
  const [state1, setstate1] = useState({ s: "Loading..." });
 
  useEffect(() => {
    const fetchData = async () => {
      var x = document.getElementById("shashi");
      const data = await axios(
        x.innerHTML.replace("amp;", "")
      );
      const data1 = await axios(
        `https://api.covidindiatracker.com/total.json`
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
      let s = await data.data.addresses[0].address.countrySubdivision;
      let d = await data.data.addresses[0].address.countrySecondarySubdivision;
      let c = await data.data.addresses[0].address.country;
      let ddata = data3.data[s].districtData[d];
      let sc = data3.data[s].statecode;
      let sdata = data2.data[sc].total;
      let lastUpdate = data2.data[sc].meta.last_updated;
      let cdata = data1.data;
      let tldata1 = data4.data.data.medicalColleges;
      let hndata = data5.data.data.contacts.regional;
      let count = 0;
      let tldata = [];
      for (var i = 0; i <= tldata1.length - 1; i++) {
        if (s === tldata1[i].state) {
          tldata.push(tldata1[i]);
          count++;
        }
      }
      setstate1({ d, s, c, ddata, sdata, lastUpdate, cdata, tldata1, count, tldata,hndata });
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
          <Route exact={true} path="/symptomschecker">
            <Symptoms />
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



