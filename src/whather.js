import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const Weather = ({data})=>{

    const [weather, setWeather] = useState('')
    const [country, setCountry] = useState('');

   const locaton = ()=> {
    const lat = data.latlng[0];
    const lng = data.latlng[1];
    setCountry(`${lat},${lng}`)
   }

    useEffect(
        ()=>{
            if(data) {
                locaton()
            }
            console.log(country+'esta');
            const acces = async()=>{
                var get = await axios(
                    {
                        method:'GET',
                        baseURL:`https://restcountries.com/v3.1/region/${''}`,
                        responseType:'json'
                    }
                )
                setWeather(get)
            }
            if(country) {
                acces()
            }

        },[country]
    )

        console.log(weather);

    return (
        <div>

        </div>
    )
}

export default Weather