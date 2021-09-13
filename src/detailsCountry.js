import axios from "axios";
import { useEffect, useState } from "react";
// import { Route, Switch, useHistory, useParams, useRouteMatch } from "react-router";
import {useRouteMatch, Switch,Link, useParams, Route} from "react-router-dom"
import './country.css'
import "./main.scss"
import Menssage from "./message";
import { useForm  }  from "react-hook-form"
import Loader from "./loader";
import ImageZoom from "./img-zoom-in";
// import { useHistory, useLocation, useParams, useRouteMatch } from "react-router"

const Details = ()=>{
    const [data, setData] = useState('');
    const {register, handleSubmit } = useForm();
    const [Acomment, setaComment] = useState('')


    const params = useParams();
    // const history = useHistory();
    

    const { url } = useRouteMatch();
    useEffect(
        ()=>{
            const acces = async()=>{
                try {
                    const url = `https://restcountries.eu/rest/v2/name/${params.name}`
                    const get = await axios.get(url);
                    setData(get.data[0])
                } catch(error){
                    console.log(error);
                }
            }
            acces()
        },[params]
    )

    return (
        <>        
        {data? <div className='details-coutry-signature'>
                <div className='details-country-page-title'>
                <h1> Country Details: {data.name}</h1>
                </div>
                <div className='continer-details'>
                    <div className='title'>
                        {data.name}
                    </div>
                    
                    <div className='details-country-svg-img'>
                        <Link to={`${url}/image`} className='zoom-in'>
                            <img src={data.flag} alt={data.name}/>
                        </Link>
                    </div>
                    <div className='details-country-info'>
                        <div className='data-country'>
                            <p>{`Region: ${data.region}`}</p>
                            <p>{`Capital: ${data.capital}`}</p>
                            <p>{`Native Name: ${data.nativeName}`}</p>
                            <p>{`Area: ${data.area}`}</p>
                            <p>{`Population: ${data.population}`}</p>
                            <p>{`Timezone: ${data.timezones[0]}`}</p>
                            <div className='comments-continer'>
                                <div className='title-comments'>
                                    <h3>Comment</h3>
                                </div>
                                <form onSubmit={handleSubmit(e=>{setaComment(e)})}   className='comment-epace-all-countries continer-1'>
                                    <label className='label-comment'>
                                        Your Name:
                                        <input placeholder='What is your name?' className='label-comment-name' {...register('name')} />
                                    </label>
                                    <label className='label-comment'>
                                        Country to comment:
                                        <input className='label-coment-country' value={params.name} readOnly {...register('country')}/>
                                    </label>
                                    <label className='label-comment'>
                                        Comment:
                                        <textarea placeholder='Write here your comment...'  className='label-comment-country' {...register('comment')} />
                                    </label>
                                    <button type='submit'>Comment</button>
                                </form>
                            </div>
                        </div>
                        <div className='all-coments-viewed'>
                            {Acomment &&   <Menssage info={Acomment}></Menssage>}
                    </div>
                </div>
                </div>
            </div>:<Loader></Loader>}   
            <Switch>
                <Route path={`${url}/image`}>
                <ImageZoom src={data.flag} alt={data.name}></ImageZoom>
                </Route>
            </Switch>
        </>
    )

}

export default Details