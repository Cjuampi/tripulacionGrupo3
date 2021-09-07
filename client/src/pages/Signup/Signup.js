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
  const [mssgName, setMssgName] =useState('')
  const { userNameDfun, setUserNameDfun, userEmailDfun, setUserEmailDfun } = useContext(valuesContext)
  const [checkEmail, setCheckMail] = useState(false)
  const [checkPass, setCheckPass] = useState(false)
  const [checkName, setCheckName] = useState(false)
  
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
    if(utilsReact.checkEmail(userEmail)&&utilsReact.checkPass(userPassword)&&utilsReact.checkPass(userRePassword) && utilsReact.matchPass(userPassword,userRePassword) && utilsReact.maxLengthEmail(userEmail)){
      signupAxios()
    }else if(!utilsReact.checkUser(userName)){
      setCheckName(true);setMssgName('El usuario no tiene que tener caracteres especiales o números')
    }else if(!utilsReact.maxLengthName(userName)){
      setCheckName(true);setMssgName('La longitud de usuario tiene que ser menor a 20')
    }else if(!utilsReact.checkEmail(userEmail)){
      setCheckMail(true);setMssgEmail('Email no válido, introduzca un email válido')
    }else if(!utilsReact.maxLengthEmail(userEmail)){
      setCheckMail(true);setMssgEmail('El email tiene que ser menor a 46 caracteres') 
    }else if(!utilsReact.checkPass(userPassword)){
      setCheckPass(true);setMssgPass('La contraseña debe tener como mínimo una mayúscula, un número, un carácter especial y logitud de 8 caracteres')
    }else if(!utilsReact.matchPass(userPassword,userRePassword)){
      setCheckPass(true);setMssgPass('Las contraseñas no coinciden')
    }
  }

  const handleNameChange = (e) =>{
    setCheckName(false)
    setUserName(e.target.value)
  }

  const handleEmailChange = (e) =>{
    setCheckMail(false)
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setCheckPass(false)
    setPassword(e.target.value);
  }

  const handleRePasswordChange = (e) => {
    setCheckPass(false)
    setRePassword(e.target.value);
  }

  return (
    <div className="login-section">
      <form className="UserSignup" onSubmit={handleSubmit}>
        <h1 className="registro">Registro</h1>
        {checkName?<p className="textErrorLogin">{mssgName}</p>:<></>}
        <input id="userName" placeholder="Usuario" name="userName" type="text" className="inputFormLS" onChange={handleNameChange} required/>
        {checkEmail?<p className="textErrorLogin">{mssgEmail}</p>:<></>}
        <input id="Email" placeholder="Email"  name="email" type="email" className="inputFormLS" onChange={handleEmailChange} required/>
        {checkPass?<p className="textErrorLogin">{mssgPass}</p>:<></>}
        <input id="password" placeholder="Contraseña"  name="password" type="password" className="inputFormLS" onChange={handlePasswordChange} required />
        <input id="passwordConfirmation" placeholder="Confirme Contraseña" name="passwordConfirmation" className="inputFormLS" type="password" onChange={handleRePasswordChange} required/>
        <input className='submitBtn' type="Submit" />
      </form>
    </div>
  );
};

export default UserSignup;