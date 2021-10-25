const Menssage = ({info})=>{

    return (
        <div className='a-menssage'>
            <div className='name-people'>{info.name}</div>
            <div className='country-comment'>{info.country}</div>
            <div className='menssage-people'>{info.comment}</div>
        </div>
    )
}

export default Menssage