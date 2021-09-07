import React, { useContext } from "react";
import { Popup } from "react-leaflet";
import { valuesContext } from '../../contexts/contextValue'

const MarkerPopup = (props) => {
/*   const abc = () =>{
    console.log('click')
  } */
  /* console.log('los props:',props) */
  return (
    <div /* onClick={props.functionC(props.name)} */>
      <Popup >
        <div>Evento: {props.name}</div>
      </Popup>
    </div>
  );
};

export default MarkerPopup;