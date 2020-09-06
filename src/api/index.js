import axios from "axios";

var x = document.getElementById("shashi");
//   let locApi =  "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+{latitude}+"&longitude="+{longitude}+"&localityLanguage=en";
//
const allcountry =  "https://disease.sh/v3/covid-19/all";
const indanStates = "https://api.covid19india.org/v4/data.json";
const indianDistricts = "https://api.covid19india.org/state_district_wise.json";



export const fetchCountryData = async() => {
    try {
      const {data} = await  axios.get(allcountry);
      return {confrimed:data.cases ,recovered:data.recovered,deaths:data.deaths,todayCases:data.todayCases,todayRecovered:data.todayRecovered,todayDeaths:data.todayDeaths,active:data.active};
    } catch (error) {
      return error;
    }
}
export const fetchStatesData = async() => { 
  try {
    const {data} =await axios.get((x.innerHTML).replace("amp;" , ""));  
    const data2  = await axios.get(indanStates);
    const data1 =await axios.get(indianDistricts);

      let s =await data.addresses[0].address.countrySubdivision;
      let sc =await data1.data[s].statecode;
      return {s:data2.data[sc].total , l:data2.data[sc].meta.last_updated};

    
    
      } catch (error) {
        return error;
      }
}
    


export const fetchDistrictData = async() => {
    try {
      
      const data1 =await axios.get((x.innerHTML).replace("amp;" , ""));
    const data =await axios.get(indianDistricts);
    let s =await data1.data.addresses[0].address.countrySubdivision;
    let d =await data1.data.addresses[0].address.countrySecondarySubdivision;

      return data.data[s].districtData[d];
          } catch (error) {

    }
}



  export const fetchLocApiData = async() => {
    try {  
      
   
    const data =await axios.get((x.innerHTML).replace("amp;" , ""));
     let s =await data.data.addresses[0].address.countrySubdivision;
    let d =await data.data.addresses[0].address.countrySecondarySubdivision;
    let c =await data.data.addresses[0].address.country;
     return {d,s,c};
   }
   catch (error) {
    return error;
    }
  }
  