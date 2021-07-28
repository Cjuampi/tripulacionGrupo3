import axios from 'axios';
import React, {useState,useEffect} from 'react';

import './AddCommentHeader.css'

const CommentHeader =  (props) => {
    const [name,setName] = useState('');
    const [comment,setComment] = useState('');
    

  const onNameChange = (e) => {
      setName( e.target.value)
  }

  const onCommentChange = (e) => {
      setComment(e.target.value)
  }

  const addComment = async () => {
      try{
          let result = await axios.post('/comments',{name:name,comment:comment})
          if(result.data.type === 'ok'){
              setName(result.data.name)
              setComment(result.data.comment)
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
          <input type="text" className = "form-control" value={name} onChange={onNameChange} placeholder="Nombre" required />
          <textarea rows="5" className="form-control2" value={comment} placeholder="Escribe tu comentario" onChange={onCommentChange} required />
          <button type="submit" className="btn">
          Deja un comentario</button>
        </form>
      </div>
    )
  }

  export default CommentHeader;
