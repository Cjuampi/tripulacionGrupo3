import React, { useEffect, useState } from 'react'
import { useMap, MapContainer , TileLayer} from 'react-leaflet'
import MapMarkers from './Map.mark'
import 'leaflet/dist/leaflet.css'
import './Map.css'



const MapView = (props) =>{
    
    console.log("Propss",props.data)
    const [stateC, setStateC] = useState([props.data[0].coordinates[0],props.data[0].coordinates[1]]);
    /* const [stateC, setStateC] = useState([40.4167278,-3.7033387]); */
    const [stateZ, setStateZ] = useState(4)

    function ChangeView({ center, zoom }) {
        /* console.log(center,zoom) */
        const map = useMap();
       /* map.setView(center, zoom); */
       map.flyTo(center,zoom)
        return null;
      }

      const changeStados = ({ center, zoom }) =>{
        setStateC(center)
      }


    const mapContainer = () => {

        return (
        <MapContainer center={stateC} zoom={stateZ} >

            <ChangeView center={stateC} zoom={stateZ} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapMarkers data={props.data} changeEvent = {props.changeEvent} changeCenter ={changeStados} />
        </MapContainer>
        )
    }

    useEffect(()=>{console.log('render')})

    useEffect(()=>{
        if(props.data.length !== 0){
            //console.log('latt', props.data[0].coordinates[0], 'longg', props.data[0].coordinates[1])
            //setStateC({'lat':props.data[0].coordinates[0], 'lng': props.data[0].coordinates[1]}) 
            setStateC(props.data[0].coordinates)
            //setStateC(props.data.coordinates)
            setStateZ(16)
            console.log('estado C', stateC)
        
        }
    },[props.data])


    return(
        <section>
            {mapContainer()}
{/*             <div>
            {props.data.length!==0&&props.data[0].name}
            </div> */}
        </section>
    );
}

export default MapView;