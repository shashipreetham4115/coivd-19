import axios from "axios";

var x = document.getElementById("shashi");
//   let locApi =  "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+{latitude}+"&longitude="+{longitude}+"&localityLanguage=en";
//
const india =  "https://api.covidindiatracker.com/total.json";
const indanStates = "https://api.covid19india.org/v4/data.json";
const indianDistricts = "https://api.covid19india.org/state_district_wise.json";

export const fetchLocApiData = async() => {
    try {  
    const data =await axios.get((x.innerHTML).replace("amp;" , ""));
    const data1 =await axios.get(indianDistricts);
    const data2  = await axios.get(indanStates);
    const data4 = await axios.get(india);
     let s =await data.data.addresses[0].address.countrySubdivision;
    let d =await data.data.addresses[0].address.countrySecondarySubdivision;
    let c =await data.data.addresses[0].address.country;
    let ddata =await data1.data[s].districtData[d];
    let sc =await data1.data[s].statecode;
    let sdata =await data2.data[sc].total;
    let lastUpdate =await data2.data[sc].meta.last_updated;
    let cdata = await data4.data;
     return{d,s,c,ddata,sdata,lastUpdate,cdata}
   }
   catch (error) {
    return error;
    }
  }
  


  // export const fetchCountryData = async() => {
//     try {
//       const {data} = await  axios.get(allcountry);
//       return {confrimed:data.cases ,recovered:data.recovered,deaths:data.deaths,todayCases:data.todayCases,todayRecovered:data.todayRecovered,todayDeaths:data.todayDeaths,active:data.active};
//     } catch (error) {
//       return error;
//     }
// }
// export const fetchStatesData = async() => { 
//   try {
//     const {data} =await axios.get((x.innerHTML).replace("amp;" , ""));  
//     const data2  = await axios.get(indanStates);
//     const data1 =await axios.get(indianDistricts);

//       let s =await data.addresses[0].address.countrySubdivision;
//       let sc =await data1.data[s].statecode;
//       return {s:data2.data[sc].total , l:data2.data[sc].meta.last_updated};

    
    
//       } catch (error) {
//         return error;
//       }
// }
    


// export const fetchDistrictData = async() => {
//     try {
      
//       const data1 =await axios.get((x.innerHTML).replace("amp;" , ""));
//     const data =await axios.get(indianDistricts);
//     let s =await data1.data.addresses[0].address.countrySubdivision;
//     let d =await data1.data.addresses[0].address.countrySecondarySubdivision;

//       return data.data[s].districtData[d];
//           } catch (error) {

//     }
// }
