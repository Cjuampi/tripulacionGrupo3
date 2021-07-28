import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Buscador from '../../components/Search/Search'
import ListOffer from '../../components/OffersList/OffersList'
import { valuesContext } from '../../contexts/contextValue'
import BackToTopButton from '../../components/BackTop/BackToTopButton';

const Eventos = () => {

    const [resultArray, setRestulArray] = useState([]);
    const { findWord,setFindWord} = useContext(valuesContext)
    

    
    const getAllEvntWord = async() =>{
        let result = await axios.post('/fndWrdAllEvnt',{wordSearch:findWord})
        /* console.log(result) */
        return result
    }

    const renderResult = () =>{
        if(findWord === ''){
            return null
        }else if(resultArray.length > 0){
            return <ListOffer datos={resultArray}/>
        }else {
            return <p>Resultados no encontrados</p>
        }
       
    } 

    useEffect(()=>{
        window.scrollTo(0, 0)
        if(findWord){
            const exeSearchAll = async() => {
                let result = await getAllEvntWord()
                setRestulArray(result.data)
            } 
            exeSearchAll()
        }
    },[findWord])

    return(
        <div>
            <Buscador />
            <BackToTopButton />
            {renderResult()}
        </div>
    );
}

export default Eventos;