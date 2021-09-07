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
    const [updateV, setUpdateV] = useState(true)


    const evetDetailAxios = async() =>{
        let result = await axios.post('/fndDetailEvent',{id_evento:detailE})
        return result.data[0]
    }

    const eventSelect = (nombre) => {
        return null

    }

    const reloadComent = () => {
        setUpdateV(!updateV);
    }

    const renderMap = () =>{
        if(sAEvent.lat){
            return <MapLeaft  changeEvent = {eventSelect} data ={[{ name : sAEvent.nombre_evento ,coordinates:[`${sAEvent.lat}`,`${sAEvent.lon}`]}]}  zoom={14} />
        }else{
            return null
        }   
    }

    const getComments = async () =>{
        let result = await axios.post('/fndCommentsEvent',{id_evento:detailE})
        return result.data;  
    }

    const getIdUser = async () => {
        let userCookie = utilsReact.getCookieToken("userEmail");
        let result = await axios.post('/findUser',{id_user:userCookie})
        return result.data;
        
    } 
    

    const renderComments = () => {
        if (
            sAcomments.length != 0
        ) {

            return <CommentsList datos={sAcomments} />
        } else {
            return null;
        }



    }
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date=new Date(sAEvent.fecha_inicio);
    const cleanDate = date.toLocaleDateString("es-ES", options);
    

    useEffect(() => {
        window.scrollTo(0, 0)
        const exectAll = async () => {
            let result = await evetDetailAxios()
            setAEvent(result)
            getIdUser();
        }
        exectAll()
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
    }, []);


    useEffect(() => {
        console.log(' useeffect  de ideUSER ejecutado ', updateV)
        const exectAllComments = async () => {
            let result = await getComments()
            setAcomments(result)
        }
        exectAllComments()
       
    },[updateV]);

    const renderAddComments = () => {
        if(idUser){
            let index = sAcomments.findIndex((item) => item.id_user === idUser.id_user) 
            if(index == -1){
                return <CommentHeader id_user={idUser.id_user} id_evento={detailE} reloadFn={reloadComent}/>
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
                        <p>Localización</p>
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