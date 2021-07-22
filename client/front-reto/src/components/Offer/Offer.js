import React from 'react';
//falta importar css



const Offer= (props) => {

        let {url,texto} = props.data;
        return (
            <section className='offers'>
                 <img src= {url} alt="foto evento" width="300" height="400"/>
                <p className="description"> {texto} </p>
            </section>
        )
    }

    export default Offer;