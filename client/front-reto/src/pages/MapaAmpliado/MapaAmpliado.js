import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { valuesContext } from '../../contexts/contextValue'
import MapLeaflet from '../../components/MapLeaflet/Mapview'


const MapaAmpliado = () => {
    
    const { token } = useContext(valuesContext)
    const [evento, setEvento] = useState(null)

    const datos = [
        { name: "event1", coordinates:  [40.3979, -3.69016] },
        { name: "evnet2", coordinates:  [40.4078,-3.72524] },
        { name: "evnet10", coordinates: [40.4069,-3.72673] },
        { name: "evnet11", coordinates: [40.4185,-3.69638] },
        { name: "event14", coordinates:  [40.4223,-3.68419] }
    ]


    const eventSelect = (nombre) => {
        /* console.log('click',nombre) */
        setEvento(nombre)

    }
    useEffect(() => {
        console.log('***Entro al useEffect***')
        if(evento){
            console.log('se actualiza el evento')//llamar a una función que dibuje las cajas azules
        }
    }, [evento])

    return (
        <div>
            <MapLeaflet data={datos}  changeEvent = {eventSelect}/>
            <p>{evento}</p>
        </div>
    );
}

export default MapaAmpliado;