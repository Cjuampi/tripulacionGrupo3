import React, { useContext, useEffect, useState }from 'react';
import { valuesContext } from '../../contexts/contextValue'
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const DetailEvents = () =>{

    
    const { detailE } = useContext(valuesContext);
    const [sAEvent, setAEvent] = useState([])
    const history = useHistory()

    console.log('estoy aqu', detailE)

    const evetDetailAxios = async() =>{
        let result = await axios.post('http://localhost:5000/fndDetailEvent',{id_evento:detailE})
        console.log(result.data)
        setAEvent(result.data)
    }
    useEffect(()=>{
        if(detailE!==''){
            evetDetailAxios()
        }
    },[])    

    
    return(
        <div>
            {detailE!=0?(
                <div className="contImage">
                    {<img src={sAEvent.imagen_url}/>}
                </div>
            )
            :
            (
                history.push("/")
            )}   
        </div>
    );
}

export default DetailEvents;