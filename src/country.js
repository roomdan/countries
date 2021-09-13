import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Country = ({src, alt, title, render})=>{
    const [opacity, setOpacity] = useState();

    useEffect(
        ()=>{
            if(render) {
                setOpacity('100%');
            }
            else{setOpacity('')}
        },[render]
    )

    return (
        <div style={{opacity:opacity}} className='country-simple'>
            <div className='continer'>
                <div className='image-country'>
                    <img src={src} alt={alt} />
                </div>
                <div className='text-country' >
                    <h3>{title}</h3>
                </div>
                <div className='show-more'>
                    <Link to={`/country/${alt}`}>More</Link>
                </div>
                </div>
        </div>
    )
}

export default Country