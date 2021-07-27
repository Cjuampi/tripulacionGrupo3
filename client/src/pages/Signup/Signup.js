import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import uCookies from 'universal-cookie';
import './Signup.css';
import { useHistory } from 'react-router-dom';

const UserSignup = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [userRePassword, setRePassword] = useState('');
  const [cookies, setCookie] = useCookies();
  const objCookies = new uCookies()
  let history = useHistory()


  const getCookieToken = () =>{
    let token = objCookies.get('userToken');
    /* console.log('el token ',token) */
    return token;
  }

  const addCookie = (cookieToken) =>{
    setCookie('userToken', cookieToken, { path: '/' });
  }

  const signupAxios = async () =>{
    try {
      let result = await axios.post('/signUp',{userName:userName,userEmail:userEmail,userPassword:userPassword})
      console.log(result)
      if(result.data.type == 'Ok'){
        addCookie(result.data.token)
        history.push("/");
      }
    }catch(err){
      console.log('el error',err)
    }
    
/*  if(result.data.type == 'Ok'){
      addCookie(result.data.token)
      history.push("/");
    }else{
      console.log(result.data.message)
    } */
  }



  const handleSubmit = event => {
    event.preventDefault();
    
      signupAxios()

  };

  const handleNameChange = (e) =>{
    setUserName(e.target.value)
  }

  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };


  const clear = () => {
    setUserName('');
    setEmail('');
    setPassword('');
    setRePassword('');
  };

  return (
    <div className="login-section">
      <form className="UserSignup" onSubmit={handleSubmit}>
        <h1 className="registro">Registro</h1>
        
        <input id="userName" placeholder="Usuario" name="userName" type="text" className="inputFormLS" onChange={handleNameChange} required/>
        
        <input id="Email" placeholder="Email"  name="email" type="email" className="inputFormLS" onChange={handleEmailChange} required/>
        
        <input id="password" placeholder="Contraseña"  name="password" type="password" className="inputFormLS" onChange={handlePasswordChange} required />
        
        <input id="passwordConfirmation" placeholder="Confirme Contraseña" name="passwordConfirmation" className="inputFormLS" type="password" onChange={handleRePasswordChange} required/>
        <input className='submitBtn' type="Submit" />
      </form>
    </div>
  );
};

export default UserSignup;