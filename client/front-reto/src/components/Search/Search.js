import React, { useEffect, useState } from 'react';
import '../Search/Search.css'

const SearchBar = (props) => {
    const [tmpW,setTmpW] = useState('')
    const [keyWord,setKeyWord] = useState('')
    

    const getSearchValue = (event) =>{
        setKeyWord(event.target.value)
    }

   const clickSendValue = () => {
        props. fncWrdSrch(keyWord)
    }

   /* useEffect(()=>{ 
        if(keyWord){
            clickSendValue()
        }
    },[keyWord]) */

    console.log('theprops,', props)
    return(
        <div className="topnav">
            <input type="text" placeholder="Buscar..." onChange={getSearchValue}></input>
            <button className="search_button" onClick={clickSendValue} >Buscar</button>
        </div>
    )

}

export default SearchBar;