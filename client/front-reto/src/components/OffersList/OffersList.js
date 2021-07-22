import React from "react";
import Offer from '../Offer/Offer';
//falta importar css



 const OfferList = (props) =>{
  const renderOffers = () => {
    return props.datos.map((offer, i) => (
       <Offer data={offer} key={i}  />
    ));
  }



  return (
    <div>
        {renderOffers()}
    </div>
  );
  }

export default OfferList;