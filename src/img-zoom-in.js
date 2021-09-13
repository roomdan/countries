import { useState } from "react";
import { useHistory } from "react-router"

const ImageZoom = ({alt, src})=>{

    const [width, setWidth] = useState('30rem');
    const [height, setHeight] = useState('20rem');

    const history = useHistory();

    const zoom = ()=>{
        setWidth('40rem');
        setHeight('30rem');
    }

    return (
            <div className='image-zoom'>
                <div className='head-view'>
                    <button onClick={()=>{history.goBack()}} className='btn-close'></button>
                </div>
                <div className='img-zoom-content'>
                    <div onClick={zoom} style={
                        {
                            width:width,
                            height:height,
                        }
                    } className='zoom-image-center'>
                            <img src={src} alt={alt}/>
                    </div>
                </div>
            </div>
    )
}

export default ImageZoom