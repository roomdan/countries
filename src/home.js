import { useEffect, useState } from 'react';
import accesApi from './acces-api';
import Country from './country';


const Home = ({Sregion})=> {
    
  const [region, setRegion] = useState('eu');
  const [countries, setCountries ] = useState(null);
  const [more, setMore] = useState(6); const [innit, setInnit] = useState(0);


  localStorage.setItem('pagination', more);
  const views = localStorage.getItem('pagination')

  useEffect(
    ()=>{
        try {
            const algo = async()=>{
                const al = await accesApi(region);
                setCountries(al.data);
               }
               algo()
        }
        catch ( error) {
            console.log(error);
        }
    },[region])

  const country = countries?countries.slice(0,views).map(
    (e)=>{
      return <Country render={true} src={e.flag} alt={e.name} title={e.name} key={e.population}></Country>
    }
  ):<div className='loader-box'><div className='loader-animation'></div></div>

    const flow = ()=>{
      setInnit(
        ()=>{
          if(countries){
            if(innit<countries.length-3){
              return innit+1
            }
            else {return 0}
          }
        }
      )
      setMore(
        ()=>{
          if(countries){
            if(more<countries.length){
              return more+3
            }
            else {return 3}
          }
        }
      )
    }
    useEffect(
        ()=>{
            setRegion(Sregion)
        },[Sregion]
    )

  return (
    <div className="App">
      <div className='all-countries-grid'>
      {country}
      </div>
      <span className='pagination-style'>
        {`Results in viewport:`}
        <input type='number' className='page-number' value={more} onChange={e=>{setMore(Number(Math.abs(e.target.value)))}} />
        <button className='more-button' onClick={flow}>More Results</button>
        <div className='child'>
        {`Min results to view: ${more}`}
        </div>
        <div className='child'>
        {`Max results to view: ${countries?countries.length:''}`}
        </div>
      </span>
    </div>
  );
}

export default Home