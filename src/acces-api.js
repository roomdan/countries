import axios from "axios";

const accesApi =(region)=>{
        const apis = `https://restcountries.com/v3.1/region/${region}`;
        const alt = axios.get(apis, JSON);
        return alt
}
export default accesApi