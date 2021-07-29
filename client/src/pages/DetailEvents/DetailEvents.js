import React, { useContext, useEffect, useState }from 'react';
import { valuesContext } from '../../contexts/contextValue'
import { useHistory } from 'react-router-dom';
import MapLeaft from '../../components/MapLeaflet/Mapview'
import axios from 'axios';
import utilsReact from '../../utils/Utils';
import './DetailEvents.css';
import BackToTopButton from '../../components/BackTop/BackToTopButton';
import CommentHeader from '../../components/AddCommentHeader/AddCommentHeader';
import CommentsList from '../../components/CommentList/CommentList';

const DetailEvents = () =>{

    
    const { detailE } = useContext(valuesContext);
    const [sAEvent, setAEvent] = useState([]);
    const history = useHistory();
    const [sAcomments,setAcomments] = useState([]);
    const [idUser,setIdUser] = useState([]);


    const evetDetailAxios = async() =>{
        let result = await axios.post('/fndDetailEvent',{id_evento:detailE})
        /* console.log(result.data) */
        return result.data[0]
    }

    const eventSelect = (nombre) => {
        /* console.log('click',nombre) */
        return null

    }

    const renderMap = () =>{
        if(sAEvent.lat){
            return <MapLeaft  changeEvent = {eventSelect} data ={[{ name : sAEvent.nombre_evento ,coordinates:[`${sAEvent.lat}`,`${sAEvent.lon}`]}] }/>
        }else{
            return null
        }   
    }

    const getComments = async () =>{
        
        let result = await axios.post('/fndCommentsEvent',{id_evento:detailE})
        //console.log(result.data)
        return result.data;  

    }

    const getIdUser = async () => {
        let userCookie = utilsReact.getCookieToken("userEmail");
        console.log('***********************',userCookie)
        let result = await axios.post('/findUser',{id_user:userCookie})
        //console.log('---------------',result)
        return result.data;
        
    } 
    

    const renderComments = () => {
        if(
            sAcomments.length != 0
        ){
            console.log("**********************************",sAcomments)
            return <CommentsList datos={sAcomments}/>
        }else{
            console.log("datos no encontrados")
             return null; 
        }

        

    }
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    //console.log(sAEvent.fecha_inicio)
    const date=new Date(sAEvent.fecha_inicio);
    //console.log(date)
    const cleanDate = date.toLocaleDateString("es-ES", options);
    

    useEffect(() => {
        window.scrollTo(0, 0)
        const exectAll = async () => {
            let result = await evetDetailAxios()
            setAEvent(result)
            getIdUser();
        }
        exectAll()
    }, []);



    useEffect(() => {
        const exectAllComments = async () => {
            let result = await getComments()
            setAcomments(result)
        }
        exectAllComments()
        const exectUsers = async () => {
            let result = await getIdUser()
            setIdUser(result);
        }
        exectUsers()
    },[]);

    const renderAddComments = () => {
        if(idUser){
            let index = sAcomments.findIndex((item) => item.id_user === idUser.id_user) 
            if(index == -1){
                return <CommentHeader id_user={idUser.id_user} id_evento={detailE}/>
            }else{
                return <p>No puedes añadir más comentarios en el mismo evento</p>
            }
        }      
         else{
            return <p>Para añadir una reseña debes estar registrado</p>
         }       
    }
    
    

    
    return(
        
        <div>
             <BackToTopButton />
            {detailE!=''?(
                <div className="containerDetail">
                    <div className="contImage">
                        <img alt={sAEvent.nombre_evento} src={sAEvent.imagen_url}/>
                    </div>
                    <div className="subtitle">
                        <p>{sAEvent.nombre_evento}</p>
                    </div>
                    <div className="desEvent">
                        <p>{sAEvent.descripcion}</p>
                    </div>
                    <div className="listEventDes">
                        <ul>
                            <li><span className="bold">Fecha: </span>{cleanDate}</li>
                            <br></br>
                            <li><span className="bold">Accesibilidad:</span> {sAEvent.accesibilidad}</li>
                            <br></br>
                            <li><span className="bold">Contacto: </span>{sAEvent.contacto}</li>
                            <br></br>
                            <li><span className="bold">Dirección: </span>{sAEvent.direccion}</li>
                        </ul>
                    </div>
                    <div className="mapaEvent">
                        <p>¿Como llegar?</p>
                        {renderMap()}

                    </div>
                    <div>
                        {renderComments()}

                    </div>
                    <div>
                    {renderAddComments()} 
                    </div>
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