import React from "react";
import { Marker } from "react-leaflet";
import  MarkerIcon  from "./Map.icon";
import { Popup } from "react-leaflet";
import MarkerPopup from "./Map.mark.popup";

const MapMarkers = (props) => {

  const markers = props.data.map((element, i) => (
    <Marker key={i} position={element.coordinates} icon={MarkerIcon} eventHandlers={{
      click: (e) => {
        const changeEvent = (nombre) => {
          props.changeEvent(nombre)
          props.changeCenter({ center: element.coordinates, zoom: 8 });

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