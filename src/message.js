import { useEffect, useState } from "react"

const Menssage = ({info})=>{

const [data, setData] = useState('')

    useEffect(
        ()=>{
            setData(info)
        },[info]
    )

    return (
        <div className='a-menssage'>
            <div className='name-people'>{data.name}</div>
            <div className='country-comment'>{data.country}</div>
            <div className='menssage-people'>{data.comment}</div>
        </div>
    )
}

export default Menssage