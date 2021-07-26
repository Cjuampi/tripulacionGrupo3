import React, { useEffect, useState } from "react";
import OfferList from "../../components/OffersList/OffersList";
import SearchBar from "../../components/Search/Search";
import bg_box1 from "../../assets/bg_box1.png";
import slogan from "../../assets/slogan.png";
import mision from "../../assets/mision.png";
import vision from "../../assets/vision.png";
import smile from "../../assets/smile.png";

import "../Inicio/Inicio.css";
import axios from "axios";

function Inicio() {
  const [dEventos, setDEventos] = useState([]);
  
  const destAxios = async () => {
    let result = await axios.post('http://localhost:5000/fndDestEvent')
    setDEventos(result.data)
    renderDEvents()
  }

  const renderDEvents = ()=>{
    return  <OfferList datos={dEventos} />  
  }


  useEffect(()=>{
    destAxios()
  },[])

  return (
    <div className="inicio">
      <div className="foto_slogan">
        <img className="slogan" src={slogan} alt="slogan" />
        <img src={bg_box1} alt="bg_box1" />
      </div>

      <SearchBar />
      <h2 className="destacados">Eventos destacados</h2>
      {/* <OfferList datos={datos} /> */}
      {renderDEvents()}
      <h2 className="destacados">Nuestros valores</h2>
      <div className="mision">
        <img className="star" src={mision} alt="mision" />
        <h3 className="mision_title">Misión</h3>
        <p className="acercar">
          Acercar el turismo accesible a las personas con movilidad reducida o
          discapacidad física para que disfruten de una amplia oferta de ocio
          urbano y de actividades en la naturaleza.
        </p>
      </div>
      <div className="vision">
        <img className="eye" src={vision} alt="vision" />
        <h3 className="vision_title">Visión</h3>
        <p className="acercar">
          Desde Dfun contribuimos a la formación de empleo y a la visibilidad de una problemática que no sólo afecta a las personas jóvenes con discapacidad, sino, a una población cada vez más envejecida y a familias con niños pequeños que utilizan carritos de bebé.
        </p>
      </div>
      <div className="valores">
        <img className="smile" src={smile} alt="smile" />
        <h3 className="valores_title">Valores</h3>
        <p className="acercar">
          Creemos en la necesidad de poner en valor la diversidad y convertir una posibilidad en realidad. Ayudamos también a pequeños comerciantes a difundir sus actividades y a satisfacer las necesidades de sus clientes.
        </p>
      </div>
   
    </div>
  );
}

export default Inicio;
