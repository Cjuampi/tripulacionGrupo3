import React, { useContext, useEffect, useState }from 'react';
import { valuesContext } from '../../contexts/contextValue'
import { useHistory } from 'react-router-dom';
import MapLeaft from '../../components/MapLeaflet/Mapview'
import axios from 'axios';
import './DetailEvents.css'
import BackToTopButton from '../../components/BackTop/BackToTopButton';

const DetailEvents = () =>{
    const { detailE } = useContext(valuesContext);
    const [sAEvent, setAEvent] = useState([])
    const history = useHistory()


    const evetDetailAxios = async() =>{
        let result = await axios.post('/fndDetailEvent',{id_evento:detailE})
        /* console.log(result.data) */
        return result.data[0]
    }

    const eventSelect = (nombre) => {
        /* console.log('click',nombre) */
        return null

    }

    const renderMap = () =>{
        if(sAEvent.lat){
            return <MapLeaft  changeEvent = {eventSelect} data ={[{ name : sAEvent.nombre_evento ,coordinates:[`${sAEvent.lat}`,`${sAEvent.lon}`] ,address:sAEvent.direccion}] }/>
        }else{
            return null
        }
        
    }
    //console.log(sAEvent.fecha_inicio)
    const date=new Date(sAEvent.fecha_inicio);
    //console.log(date)
    const cleanDate = date.toDateString();
    

    useEffect(() => {
        window.scrollTo(0, 0)
        const exectAll = async () => {
            let result = await evetDetailAxios()
            setAEvent(result)

        }
        exectAll()
    }, [])

    
    return(
        
        <div>
             <BackToTopButton />
            {detailE!=''?(
                <div className="containerDetail">
                    <div className="contImage">
                        <img src={sAEvent.imagen_url}/>
                    </div>
                    <div className="subtitle">
                        <p>{sAEvent.nombre_evento}</p>
                    </div>
                    <div className="desEvent">
                        <p>{sAEvent.descripcion}</p>
                    </div>
                    <div className="listEventDes">
                        <ul>
                            <li><span className="bold">Fecha: </span>{cleanDate}</li>
                            <br></br>
                            <li><span className="bold">Accesibilidad:</span> {sAEvent.accesibilidad}</li>
                            <br></br>
                            <li><span className="bold">Contacto: </span>{sAEvent.contacto}</li>
                            <br></br>
                            <li><span className="bold">Dirección: </span>{sAEvent.direccion}</li>
                        </ul>
                    </div>
                    <div className="mapaEvent">
                        <p>¿Como llegar?</p>
                        {renderMap()}
                    </div>
                </div>
            )
            :
            (
                history.push("/")
            )}   
        </div>
    );
}

export default DetailEvents;