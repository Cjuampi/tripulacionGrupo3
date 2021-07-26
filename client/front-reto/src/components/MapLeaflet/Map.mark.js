import React from "react";
import { Marker } from "react-leaflet";
import  MarkerIcon  from "./Map.icon";
import MarkerPopup from "./Map.mark.popup";

const MapMarkers = (props) => {

  /* const { coordiantes } = props; */
  console.log('Props market: ',props)
 
  const markers = props.data.map((element, i) => (
    <Marker key={i} position={element.coordinates} icon={MarkerIcon}  eventHandlers={{
      click: (e) => {
        const changeEvent = (nombre) =>{
          props.changeEvent(nombre)

        }
        changeEvent(element.i)   
      },
    }} >
        <MarkerPopup name={element.name} />
    </Marker>
  ));

  return (
    <>
        {markers}
    </>);
};

export default MapMarkers;