import React from 'react';
import '../Offer/Offer.css'
//falta importar css



const Offer= (props) => {

        let {url,texto} = props.data;
        return (
            <section className='offers'>
                 <img className="photo" src= {url} alt="foto evento" width="300" height="400"/>
                 <p className="description"> {texto} </p>
            </section>
        )
    }

    export default Offer;