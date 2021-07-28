import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { valuesContext } from '../../contexts/contextValue'
import utilsReact from '../../utils/Utils'
import './Signup.css';

const UserSignup = () => {
  const [cookies, setCookie] = useCookies();
  const [userEmail, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setPassword] = useState('');
  const [userRePassword, setRePassword] = useState('');
  const [mssgEmail,setMssgEmail] = useState('')
  const [mssgPass, setMssgPass] =useState('')
  const { userNameDfun, setUserNameDfun, userEmailDfun, setUserEmailDfun } = useContext(valuesContext)
  const [checkEmail, setCheckMail, checkPassLng, setCheckPassLng, checkPassMcht, setCheckPassMatch ] = useState(false)
  
  let history = useHistory()

  const addCookie = (nameCookie,cookieToken) =>{
    setCookie(nameCookie, cookieToken, { path: '/' });
  }

  const signupAxios = async () =>{
    try {
      let result = await axios.post('/signUp',{userName:userName,userEmail:userEmail,userPassword:userPassword})
      /* console.log(result) */
      if(result.data.type ==='Ok'){
        setUserNameDfun(result.data.username)
        setUserEmailDfun(result.data.email)
        addCookie('userToken',result.data.token)
        addCookie('userName',result.data.username)
        addCookie('userEmail',result.data.email)
        history.push("/");
      }
    }catch(err){
      console.log('el error',err)
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(utilsReact.checkEmail(userEmail)&&utilsReact.checkLengthPass(userPassword)&&utilsReact.checkLengthPass(userRePassword) && utilsReact.matchPass(userPassword,userRePassword) && utilsReact.maxLengthEmail(userEmail)){
      signupAxios()
    }
      

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