import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Region } from "./CONTEXT/context.region";
import "./header.css"

const Header = ()=>{

    const [state, dispatch ] = useContext(Region);

    const {register, handleSubmit} = useForm();
    const [sy, setSy] = useState(0);
    const [fix, setFix] = useState('');const [top,setTop]=useState('');
    const  history = useHistory();
    document.onscroll = ()=>{
       const sY = window.scrollY;
       setSy(sY)
    }

    useEffect(()=>{
        if(sy>240)
        {setFix('fixed');setTop(0)}
        else if (sy>10) {
            setTop(-70)
        }
        else {setFix(''); setTop(0)}},[sy])

    return (
        
        <div style={{position:fix,top:top}} className='header-all-page'>
             <div className='nav-part'>
                <form className='select-Form' onChange={handleSubmit(e=>{dispatch({type:'CHANGE_REGION',payload:e});history.push('/')})}>
                    <select className='select-region' {...register('region')}>
                        <option value='africa'>AFRICA</option>
                        <option value='americas'>AMERICAS</option>
                        <option value='asia'>ASIA</option>
                        <option value='europe'>EUROPE</option>
                        <option value='oceania'>OCEANIA</option>
                    </select>
                </form>
            </div>
            <div className='nav-part'>
                <Link to="/">{state.region.toUpperCase()}</Link>
            </div>
            <div className='nav-part-title'>
                <button className='btn' onClick={()=>{history.goBack()}}>
                {''} Countries
                </button>
            </div>
        </div>
    )
}

export default Header