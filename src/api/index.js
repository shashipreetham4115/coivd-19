import axios from "axios";
import React , {useState, useEffect} from "react";



function fetchLocApiData() {
  const [state1, setstate1] = useState({s:"Loading..."}); 

  useEffect(() => {
    const fetchData = async () => {
      var x = document.getElementById("shashi");
      const data = await axios(
        x.innerHTML
      );
      setstate1({s:data.data.addresses[0].address.countrySubdivision})
      };
     fetchData();
  }, []);
//  
//  const india =  "https://api.covidindiatracker.com/total.json";
//  const indanStates = "https://api.covid19india.org/v4/data.json";
//  const indianDistricts = "https://api.covid19india.org/state_district_wise.json";
//     const data = axios.get((x.innerHTML).replace("amp;" , ""));
//     const data1 = axios.get(indianDistricts);
//     const data2  =  axios.get(indanStates);
//     const data4 =  axios.get(india);
//      let s =  data.data.addresses[0].address.countrySubdivision;
//     let d =  data.data.addresses[0].address.countrySecondarySubdivision;
//     let c =  data.data.addresses[0].address.country;
//     let ddata =  data1.data[s].districtData[d];
//     let sc =  data1.data[s].statecode;
//     let sdata =  data2.data[sc].total;
//     let lastUpdate =  data2.data[sc].meta.last_updated;
//     let cdata =  data4.data;
//      setstate1({d,s,c,ddata,sdata,lastUpdate,cdata})
      
  }
  
  export default fetchLocApiData;