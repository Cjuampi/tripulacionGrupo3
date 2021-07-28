import React, { useEffect, useState } from 'react'
import { useMap, MapContainer , TileLayer} from 'react-leaflet'
import MapMarkers from './Map.mark'
import 'leaflet/dist/leaflet.css'
import './Map.css'



const MapView = (props) =>{
    
    /* console.log("Propss",props.data) */
    const [stateC, setStateC] = useState([props.data[0].coordinates[0],props.data[0].coordinates[1]]);
    /* const [stateC, setStateC] = useState([40.4167278,-3.7033387]); */
    const [stateZ, setStateZ] = useState(props.zoom)

    function ChangeView({ center, zoom }) {
        /* console.log(center,zoom) */
        const map = useMap();
       /* map.setView(center, zoom); */
       map.flyTo(center,zoom)
        return null;
      }

      const changeStados = ({ center, zoom }) =>{
        setStateC(center)
        setStateZ(zoom)
      }

    const mapContainer = () => {

        return (
        <MapContainer center={stateC} zoom={stateZ} >

            <ChangeView center={stateC} zoom={stateZ} />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {props.data[0].name=="centroMadrid"?<></>:
            <MapMarkers data={props.data} changeEvent = {props.changeEvent} changeCenter ={changeStados} />}
        </MapContainer>
        )
    }


    useEffect(()=>{
        if(props.data.length !== 0){
            setStateC(props.data[0].coordinates)
            setStateZ(props.zoom)
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