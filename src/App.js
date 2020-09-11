import axios from "axios";
import React , {useState, useEffect} from "react";
import Title from "./Title"; 
import Cards from "./components/Cards/Cards";
import styles from "./App.module.css";
import ButtonCard from "./ButtonCard";
import Popup from "./Popup";
import TestCenters from "./components/Cards/Testcenters"

function App() {
  const [state1, setstate1] = useState({s:"Loading..."});
  const [Show1, setShow1] = useState(false); 
  const [Show2, setShow2] = useState(false);
  const [Show3, setShow3] = useState(false);
  const [Show4, setShow4] = useState(false);
    useEffect(() => {
      const fetchData = async () => {
        var x = document.getElementById("shashi");
        const data = await axios(
          x.innerHTML.replace("amp;" , "")
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
    let s = await data.data.addresses[0].address.countrySubdivision;
    let d =await  data.data.addresses[0].address.countrySecondarySubdivision;
    let c =await  data.data.addresses[0].address.country;
    let ddata =  data3.data[s].districtData[d];
    let sc =  data3.data[s].statecode;
    let sdata =  data2.data[sc].total;
    let lastUpdate =  data2.data[sc].meta.last_updated;
    let cdata =  data1.data;
    setstate1({d,s,c,ddata,sdata,lastUpdate,cdata})
        };
        setTimeout(() => {
          fetchData()
        }, 7000);
    }, []);
    const f1 = () => Show1 ? setShow1(false) : setShow1(true) ;
    const f2 = () => Show2 ? setShow2(false) : setShow2(true) ;
    const f3 = () => Show3 ? setShow3(false) : setShow3(true) ;
    const f4 = () => Show4 ? setShow4(false) : setShow4(true) ;

    return (
      <div className={styles.container}>
      <Title />  
       <ButtonCard 
         onclickfunction={f2}
         titleofBtn="Stats"
      />
      { Show2 ? <Popup onclickfunction={f2} popupcontent={<Cards data={state1}/>}></Popup>  : null}
       <ButtonCard 
         onclickfunction={f3}
         titleofBtn="TestCenters"
      />
      { Show3 ? <Popup onclickfunction={f3} popupcontent={<TestCenters/>}></Popup>  : null}
       <ButtonCard 
         onclickfunction={f4}
         titleofBtn="Helpline Numbers"
      />
      { Show4 ? <Popup onclickfunction={f4} popupcontent={<Cards data={state1}/>}></Popup>  : null}
      <ButtonCard 
         onclickfunction={f1}
         titleofBtn="Covid Symptoms Checker"
      />
     { Show1 ? <Popup onclickfunction={f1} popupcontent={<Cards data={state1}/>}></Popup>  : null}
      </div>
       
    );
    }

export default App;



