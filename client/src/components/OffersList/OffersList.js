import React from "react";
import Offer from '../Offer/Offer';
import '../OffersList/OffersList.css'
import Carousel from 'react-material-ui-carousel'


const OfferList = (props) => {
  const renderOffersCarousel = () => {
    return (
      <Carousel>
        {
          props.datos.map((offer, i) => (
            <Offer data={offer} key={i} cardId={offer.id_evento} />
          ))
        }
      </Carousel>
    );
  }

  const renderOffers = () => {
    return (
          props.datos.map((offer, i) => (
            <Offer data={offer} key={i} cardId={offer.id_evento} />
          ))
    );

  }

  return (
    <div className="offerList">
      {props.carousel?renderOffersCarousel():renderOffers()}
    </div>
  );
  }

export default OfferList;