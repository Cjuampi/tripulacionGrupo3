import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { valuesContext } from '../../contexts/contextValue';
import MapLeaflet from '../../components/MapLeaflet/Mapview';
import MapOffer from '../../components/MapOffer/MapOffer';
import '../MapaAmpliado/MapaAmpliado.css'


const MapaAmpliado = () => {
    
    const { token } = useContext(valuesContext)
    const [evento, setEvento] = useState(0)
    //imagen_url, nombre_evento, descripcion, precio
    const datos = [
        { name: "event1", coordinates: [40.41709791991183, -3.7035048595788638],imagen_url:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Madrid_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_%28MNCARS%29_03.JPG" ,nombre_evento: "Concierto de opera", descripcion: "nsnlije fñmvevmmperpo k fñegergerpkñge kñeeg,e,", precio: 15},
        { name: "event2", coordinates: [40.418038638327005, -3.7091813684492365],imagen_url:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Madrid_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_%28MNCARS%29_03.JPG" ,nombre_evento: "Concierto de rock", descripcion: "nsnlije fñmvevmmperpo k fñegergerpkñge kñeeg,e,", precio: 10 },
        { name: "event10", coordinates: [41.40331560843518, 2.1743293697393735],imagen_url:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Madrid_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_%28MNCARS%29_03.JPG" ,nombre_evento: "Concierto de jotas", descripcion: "nsnlije fñmvevmmperpo k fñegergerpkñge kñeeg,e,", precio: 25 },
        { name: "event11", coordinates: [41.40334944364515, 2.178271913467759],imagen_url:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Madrid_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_%28MNCARS%29_03.JPG" ,nombre_evento: "Concierto de folclore", descripcion: "nsnlije fñmvevmmperpo k fñegergerpkñge kñeeg,e,", precio: 20 }
    ]


    const eventSelect = (nombre) => {
        /* console.log('click',nombre) */
        setEvento(nombre)
    }


    const renderMapOffer = () => {
        let i = evento;
        return(
            <MapOffer data={datos[i]}/>
        )
    }



    useEffect(() => {
        console.log('***Entro al useEffect***')
        if(evento){
            console.log('se actualiza el evento')//llamar a una función que dibuje las cajas azules
        }
    }, [evento])

    return (
        <div className="mapa">
            <MapLeaflet data={datos}   changeEvent = {eventSelect}/>
            
           {renderMapOffer()}
            
        </div>
    );
}

export default MapaAmpliado;