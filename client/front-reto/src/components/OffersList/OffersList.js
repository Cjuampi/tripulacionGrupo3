import React from "react";
import Offer from '../Offer/Offer';
import '../OffersList/OffersList.css'



 const OfferList = (props) =>{
   console.log('propsOFFER',props)
  const renderOffers = () => {
    return props.datos.map((offer, i) => (
       <Offer data={offer} key={i}  />
    ));
  }



  return (
    <div className="offerList">
        {renderOffers()}
    </div>
  );
  }

export default OfferList;