import { useContext, useEffect, useState } from 'react';
import accesApi from './acces-api';
import { Region } from './CONTEXT/context.region';
import Country from './country';

const Home = () => {

  const [state]= useContext(Region)

  const [countries, setCountries] = useState();
  const [more, setMore] = useState(6); const [innit, setInnit] = useState(0);

  localStorage.setItem('pagination', more);
  const views = localStorage.getItem('pagination')

  useEffect(
    () => {
      try {
        const algo = async () => {
          const al = await accesApi(state.region);
          setCountries(al.data)
        }
        algo()
      }
      catch (error) {
        console.log(error);
      }
    }, [state])

  const country = countries ? countries.slice(0, views).map(
    (e) => {
      return <Country render={true} src={e.flags.png} alt={e.name.common} title={e.name.common} key={e.altSpellings[1]}></Country>
    }
  ) : <div className='loader-box'><div className='loader-animation'></div></div>

  const flow = () => {
    setInnit(
      () => {
        if (countries) {
          if (innit < countries.length - 3) {
            return innit + 1
          }
          else { return 0 }
        }
      }
    )
    setMore(
      () => {
        if (countries) {
          if (more < countries.length) {
            return more + 3
          }
          else { return 3 }
        }
      }
    )
  }

  return (
    <div className="App">
      <div className='all-countries-grid'>
        {country}
      </div>
      <span className='pagination-style'>
        {`Results in viewport:`}
        <input type='number' className='page-number' value={more} onChange={e => { setMore(Number(Math.abs(e.target.value))) }} />
        <button className='more-button' onClick={flow}>More Results</button>
        <div className='child'>
          {`Min results to view: ${more}`}
        </div>
        <div className='child'>
          {`Max results to view: ${countries ? countries.length : ''}`}
        </div>
      </span>
    </div>
  );
}

export default Home