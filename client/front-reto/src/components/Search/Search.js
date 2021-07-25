import React, { useEffect, useState } from 'react';
import '../Search/Search.css'

const SearchBar = (props) => {
    const [tmpW,setTmpW] = useState('')
    const [keyWord,setKeyWord] = useState('')
    

    const getSearchValue = (event) =>{
        setKeyWord(event.target.value)
    }

   const clickSendValue = (event) => {
        event.preventDefault()
        props. fncWrdSrch(keyWord)
        event.target.reset();
    }

    console.log('theprops,', props)
    return(
        <div className="topnav">
            <form onSubmit={clickSendValue}>
                <input type="text" placeholder="Buscar..." onChange={getSearchValue}></input>
                <input className="search_button" type="submit" value="Buscar"/>
            </form>
        </div>
    )

}

export default SearchBar;