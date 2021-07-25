import React from 'react';
import '../Offer/Offer.css'
//falta importar css



const Offer= (props) => {

        let {imagen_url,nombre_evento, precio} = props.data;
        return (
            <section className='offers'>
                 <img className="photo" src= {imagen_url} alt="foto evento"/>
                 <p className="description"> {nombre_evento} </p>
                 <p className = "precio" >{precio}</p>
            </section>
        )
    }

    export default Offer;