import React, { useContext, useEffect, useState } from 'react';
/* import '../Search/Search.css' */
import { valuesContext } from '../../contexts/contextValue'
import { useHistory} from "react-router-dom";

const SearchBar = () => {
    const { wordSrchMap ,setWordSrchMap, inputWordS, setinputWordS} = useContext(valuesContext)

    
    const getSearchValue = (event) =>{
        setinputWordS(event.target.value)
    }

   const clickSendValue = (event) => {
        event.preventDefault()
        setWordSrchMap(inputWordS)
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
        </div>
    )

}

export default SearchBar;