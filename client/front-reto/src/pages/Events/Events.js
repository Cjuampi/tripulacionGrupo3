import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Buscador from '../../components/Search/Search'

const Eventos = () => {

    const [wordSearch, setwordSearch] = useState('');
    
    const getWord = (word) =>{
        console.log('la palabra:',word)
        setwordSearch(word)
    }
    
    const getAllEvntWord = async() =>{
        let result = await axios.post('http://localhost:5000/fndWrdAllEvnt',{wordSearch:wordSearch})
        console.log(result)
    }

    useEffect(()=>{
        if(wordSearch){
            console.log('el axios')
            getAllEvntWord()
        }
    },[wordSearch])

    return(
        <div>
            <Buscador fncWrdSrch = {getWord}/>
        </div>
    );
}

export default Eventos;