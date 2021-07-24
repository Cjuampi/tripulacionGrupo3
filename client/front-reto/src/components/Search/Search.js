import React from 'react';
import '../Search/Search.css'

const SearchBar = () => {

    return(
        <div className="finder">
        <div className="topnav">
            <input type="text" placeholder="Buscar..."></input>
            <button className="search_button" type="submit">Buscar</button>
        </div>
        <div className="finder_buttons">
            <button className="ocio_button" type="button">Ocio</button>
            <button className="rutas_button" type="button">Rutas verdes</button>
            <button className="madrid_button" type="button">Madrid</button>
            <button className="naturaleza_button" type="button">Naturaleza</button>
            <button className="eventos_button" type="button">Eventos</button>
        </div>
        </div>
    )

}

export default SearchBar;