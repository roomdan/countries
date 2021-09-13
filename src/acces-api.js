import axios from "axios";

const accesApi =(region)=>{
        const apis = `https://restcountries.eu/rest/v2/regionalbloc/${region}`;
        const alt = axios.get(apis, JSON );
        return alt
}
export default accesApi