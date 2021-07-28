import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { valuesContext } from '../../contexts/contextValue';
import MapLeaflet from '../../components/MapLeaflet/Mapview';
import MapOffer from '../../components/MapOffer/MapOffer';
import './MapaAmpliado.css';
import MapSearch from "../../components/MapLeaflet/MapSearch";
import axios from 'axios'



const MapaAmpliado = () => {
    const { wordSrchMap,setWordSrchMap} = useContext(valuesContext);
    const [crdsDatos, setCrdsDatos] = useState([]);

    const [evento, setEvento] = useState(null)
 
    const eventSelect = (pos) => {
        console.log('click id_evento',pos)
        setEvento(pos)
        /* setEvento(nombre) */
        /* return null */
    }

    const getAllEvntWord = async() =>{
        let result = await axios.post('/fndWrdAllEvnt',{wordSearch:wordSrchMap})
        /* console.log(result) */
        return result
    }

    const getDataS = () =>{
        if (wordSrchMap){
        return  crdsDatos.map((ele,i) => {
            return { id_evento:ele.id_evento , name: ele.nombre_evento, coordinates: [ele.lat, ele.lon]}
        });
        }
    }

    const renderMapSearch = () =>{
        let datos = []
        datos = getDataS()
        if(crdsDatos.length == 0){
            return <MapLeaflet  changeEvent = {eventSelect} data ={[{ name : "centroMadrid",coordinates:[40.41831, -3.70275]}]}  zoom={10}/>
        }else {
            return <MapLeaflet  changeEvent = {eventSelect} data ={datos}/>
        }
        
    }

    const rendBoxMap =()=>{
        console.log('datos',crdsDatos)
        /* console.log('datosCRDS', crdsDatos[evento].imagen_url)  */
        return <MapOffer data={{imagen_url: crdsDatos[evento].imagen_url, nombre_evento:crdsDatos[evento].nombre_evento, descripcion:crdsDatos[evento].descripcion, precio:crdsDatos[evento].precio, id_evento:crdsDatos[evento].id_evento}}/>
    }

    useEffect(() => {
        window.scrollTo(0,0)
        if(wordSrchMap){
            const executeSearch = async() =>{
                let result = await getAllEvntWord()
                setCrdsDatos(result.data)
            }
            executeSearch()
        }
    }, [wordSrchMap])

    useEffect(()=>{
        if(evento){
            rendBoxMap()
        }
    },[evento])

    return (
        <div className="mapa">
            <MapSearch />
            {renderMapSearch()}
            {evento!=null?rendBoxMap():<></>}

            
        </div>
    );
}

export default MapaAmpliado;