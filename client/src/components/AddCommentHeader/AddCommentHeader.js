import axios from 'axios';
import React, {useState,useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './AddCommentHeader.css';
import { valuesContext } from '../../contexts/contextValue'

const CommentHeader =  (props) => {
    const [name,setName] = useState('');
    const [comment,setComment] = useState('');
    const { detailE, setDetailE } = useContext(valuesContext);
    const history = useHistory();
    

  const onNameChange = (e) => {
      setName( e.target.value)
  }

  const onCommentChange = (e) => {
      setComment(e.target.value)
  }

  const addComment = async () => {
      try{
          let result = await axios.post('/comments',{id_user: props.id_user,id_evento: props.id_evento ,comentario:comment})
          console.log('-------------',result)
          if(result.data.affectedRows === 1){
            props.reloadFn()
             /* console.log('ok ')*/
      }
    }catch(err){
        console.log('error',err)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addComment();
  };

  
    return (
      <div className="comment-header">
        <h2 className="añadir-reseña">Añadir alguna reseña</h2>
        <form className="d-flex" onSubmit={onSubmit}>
          {/* <input type="text" className = "form-control" value={name} onChange={onNameChange} placeholder="Nombre" required /> */}
          <textarea rows="5" className="form-control2" value={comment} placeholder="Escribe tu comentario" onChange={onCommentChange} required />
          <button type="submit" id="comentar" className="btn">Comentar</button>
        </form>
      </div>
    )
  }

  export default CommentHeader;
