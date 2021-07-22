import React from "react";
import OfferList from "../../components/OffersList/OffersList";
import SearchBar from "../../components/Search/Search";



function Inicio() {
    const datos = [{url:"https://uecluster.blob.core.windows.net/images/planetainteligente/1568717270_orgi2.jpg", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis eros at enim pulvinar blandit. Vestibulum aliquet dui ac finibus fermentum. Duis neque quam, molestie vel pretium eu, rutrum id velit. Curabitur eget finibus urna, at scelerisque nulla. Integer sagittis tincidunt orci a scelerisque. Sed vestibulum, dui imperdiet scelerisque rhoncus, leo lectus imperdiet nisl, eu venenatis velit justo eu justo. Duis dignissim massa ac sem viverra iaculis."},{url:"https://uecluster.blob.core.windows.net/images/planetainteligente/1568717270_orgi2.jpg", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis eros at enim pulvinar blandit. Vestibulum aliquet dui ac finibus fermentum. Duis neque quam, molestie vel pretium eu, rutrum id velit. Curabitur eget finibus urna, at scelerisque nulla. Integer sagittis tincidunt orci a scelerisque. Sed vestibulum, dui imperdiet scelerisque rhoncus, leo lectus imperdiet nisl, eu venenatis velit justo eu justo. Duis dignissim massa ac sem viverra iaculis."},{url:"https://uecluster.blob.core.windows.net/images/planetainteligente/1568717270_orgi2.jpg", texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mattis eros at enim pulvinar blandit. Vestibulum aliquet dui ac finibus fermentum. Duis neque quam, molestie vel pretium eu, rutrum id velit. Curabitur eget finibus urna, at scelerisque nulla. Integer sagittis tincidunt orci a scelerisque. Sed vestibulum, dui imperdiet scelerisque rhoncus, leo lectus imperdiet nisl, eu venenatis velit justo eu justo. Duis dignissim massa ac sem viverra iaculis."}]



  return (
<div>
    <SearchBar/>
    <OfferList datos={datos}/>
    
</div>
  )
}

export default Inicio