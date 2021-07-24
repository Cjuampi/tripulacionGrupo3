import React, { useEffect, useState } from 'react'
import Buscador from '../../components/Search/Search'

const Eventos = () => {

    const [wordSearch, setwordSearch] = useState('');
    
    const getWord = (word) =>{
        console.log('la palabra:',word)
        setwordSearch(word)
    }
    
    useEffect(()=>{
        if(wordSearch){
            console.log('el axios')
        }
    },[wordSearch])

    return(
        <div>
            <Buscador fncWrdSrch = {getWord}/>
        </div>
    );
}

export default Eventos;