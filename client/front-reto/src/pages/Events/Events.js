import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Buscador from '../../components/Search/Search'
import ListOffer from '../../components/OffersList/OffersList'

const Eventos = () => {

    const [wordSearch, setwordSearch] = useState('');
    const [resultArray, setRestulArray] = useState([]);
    
    const getWord = (word) =>{
        console.log('la palabra:',word)
        setwordSearch(word)
    }
    
    const getAllEvntWord = async() =>{
        let result = await axios.post('http://localhost:5000/fndWrdAllEvnt',{wordSearch})
        return result
    }

    const renderResult = () =>{
        if(wordSearch === ''){
            return null
        }else if(resultArray.length > 0){
            return <ListOffer datos={resultArray}/>
        }else {
            return <p>Resultados no econtrados</p>
        }
       
    } 

    useEffect(()=>{
        if(wordSearch){
            const exeSearchAll = async() => {
                let resutl = await getAllEvntWord()
                setRestulArray(resutl.data)
            }
            exeSearchAll()
        }
    },[wordSearch])

    return(
        <div>
            <Buscador fncWrdSrch = {getWord}/>
            {renderResult()}
        </div>
    );
}

export default Eventos;