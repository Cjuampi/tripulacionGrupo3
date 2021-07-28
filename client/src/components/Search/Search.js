import React, { useContext, useEffect, useState } from 'react';
import '../Search/Search.css'
import { valuesContext } from '../../contexts/contextValue'
import { useHistory} from "react-router-dom";

const SearchBar = () => {
    const { findWord,setFindWord , inputWord, setinputWord} = useContext(valuesContext)
    let history = useHistory();
    
    const getSearchValue = (event) =>{
        setinputWord(event.target.value)
    }

   const clickSendValue = (event) => {
        event.preventDefault()
        setFindWord(inputWord)
        if (inputWord){
            /* console.log('Search findWord (context):',findWord) */
            history.push("/events");
        }
        event.target.reset();
    }

    return(
        <div className="finder">
        <div className="topnav">
            <form onSubmit={clickSendValue}>
                <input type="text" placeholder="Buscar..." onChange={getSearchValue}></input>
                <input className="search_button" type="submit" value="Buscar"/>
            </form>
        </div>
        <div className="finder_buttons">
            <button className="ocio_button" type="button">Museos</button>
            <button className="rutas_button" type="button">Naturaleza</button>
            <button className="madrid_button" type="button">Candlelights</button>
        </div>
        </div>
    )

}

export default SearchBar;