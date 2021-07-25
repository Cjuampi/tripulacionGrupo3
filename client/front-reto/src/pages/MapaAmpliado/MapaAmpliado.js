import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { valuesContext } from '../../contexts/contextValue'
import MapLeaflet from '../../components/MapLeaflet/Mapview'


const MapaAmpliado = () => {
    
    const { token } = useContext(valuesContext)
    const [evento, setEvento] = useState(null)

    const datos = [
        { name: "event1", coordinates: [40.41709791991183, -3.7035048595788638] },
        { name: "evnet2", coordinates: [40.418038638327005, -3.7091813684492365] },
        { name: "evnet10", coordinates: [41.40331560843518, 2.1743293697393735] },
        { name: "evnet11", coordinates: [41.40334944364515, 2.178271913467759] }
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