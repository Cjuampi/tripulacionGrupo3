import React from 'react';
import '../Search/Search.css'

const SearchBar = () => {

    return(
        <div className="topnav">
            <input type="text" placeholder="Buscar..."></input>
            <button className="search_button" type="submit">Buscar</button>
        </div>
    )

}

export default SearchBar;