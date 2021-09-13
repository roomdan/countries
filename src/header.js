import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useHistory } from "react-router";
import "./header.css"

const Header = ({onRegionSelect})=>{

    const {register, handleSubmit} = useForm();
    const [sy, setSy] = useState(0);
    const [fix, setFix] = useState('');const [top,setTop]=useState('');
    const [a, seta ] = useState({region:'EU (European Union)'})

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
                <form className='select-Form' onChange={handleSubmit(e=>{onRegionSelect({value:e}); seta(e)})}>
                    <select className='select-region' {...register('region')}>
                        <option value='EU'>EU (European Union)</option>
                        <option value='EFTA'>EFTA (European Free Trade Association)</option>
                        <option value='CARICOM'>CARICOM (Caribbean Community)</option>
                        <option value='PA'>PA (Pacific Alliance)</option>
                        <option value='AU'>AU (African Union)</option>
                        <option value='USAN'>USAN (Union of South American Nations)</option>
                        <option value='EEU'>EEU (Eurasian Economic Union)</option>
                        <option value='AL'>AL (Arab League)</option>
                        <option value='ASEAN'>ASEAN (Association of Southeast Asian Nations)</option>
                        <option value='CAIS'>CAIS (Central American Integration System)</option>
                    </select>
                </form>
            </div>
            <div className='nav-part'>
            </div>
            <div className='nav-part-title'>
                <button className='btn' onClick={()=>{history.goBack()}}>
                {a.region} Countries
                </button>
            </div>
        </div>
    )
}

export default Header