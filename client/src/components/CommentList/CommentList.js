import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.css';



const CommentsList = (props) =>{
  /* console.log('propsOFFER',props) */
 const renderComments = () => {
   return props.datos.map((comment, i) => (
      <Comment nombre={comment.nombre} key={i} fecha={comment.fecha} comentario={comment.comentario}/>
   ));
 }



 return (
   <div className="commentsList">
       {renderComments()}
   </div>
 );
 }


export default CommentsList;