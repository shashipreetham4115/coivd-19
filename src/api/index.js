import axios from "axios";

var x = document.getElementById("shashi");
const india =  "https://api.covidindiatracker.com/total.json";
const indanStates = "https://api.covid19india.org/v4/data.json";
const indianDistricts = "https://api.covid19india.org/state_district_wise.json";

export const fetchLocApiData = async() => {
    try {  
    const data =await axios.get((x.innerHTML).replace("amp;" , ""));
    const data1 =await axios.get(indianDistricts);
    const data2  = await axios.get(indanStates);
    const data4 = await axios.get(india);
     let s = await data.data.addresses[0].address.countrySubdivision;
    let d = await data.data.addresses[0].address.countrySecondarySubdivision;
    let c = await data.data.addresses[0].address.country;
    let ddata = await data1.data[s].districtData[d];
    let sc = await data1.data[s].statecode;
    let sdata = await data2.data[sc].total;
    let lastUpdate = await data2.data[sc].meta.last_updated;
    let cdata = await data4.data;
     return{d,s,c,ddata,sdata,lastUpdate,cdata}
   }
   catch (error) {
    return error;
    }
  }
  