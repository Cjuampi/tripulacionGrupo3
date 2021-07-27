import React, {useState, useContext} from 'react';
import axios from 'axios';
import { useHistory,Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import uCookies from 'universal-cookie';
import './Login.css';
import { valuesContext } from '../../contexts/contextValue'


const Login = ({ className, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies();
  const objCookies = new uCookies();
  let history = useHistory();
  const { userNameDfun, setUserNameDfun, userEmailDfun, setUserEmailDfun } = useContext(valuesContext)

  const addCookie = (nameCookie,cookieToken) =>{
    setCookie(nameCookie, cookieToken, { path: '/' });
  }

  const loginAxios = async () => {
    try {
      let result = await axios.post('/logIn', { userEmail: email, userPassword: password })
      /* console.log(result) */
      if (result.data.type == 'Ok') {
        setUserNameDfun(result.data.username)
        setUserEmailDfun(result.data.email)
        addCookie('userToken',result.data.token)
        addCookie('userName',result.data.username)
        addCookie('userEmail',result.data.email)
        history.push("/");
      }
    } catch (err) {
      console.log(err)
    }
  }

  const formSubmit = (e) => {
    e.preventDefault();
    loginAxios()
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
 
      <div className="login-section">
        <h1 className="iniciar">Iniciar sesión</h1>
        <form onSubmit={formSubmit}>
          <input className="input_email" type="email" name="email" placeholder="Correo" required onChange={handleEmailChange} />
          <input className="input_password" type="password" name="password" placeholder="Contraseña" required onChange={handlePasswordChange} />
          <div className="toSignup">
          <input className="login_button" type="submit" name="submit" value="INICIAR SESIÓN" />
          <div className="link">
          <Link to="/signup">¿Aún no tienes cuenta? Regístrate aquí</Link>
          </div>
          
          </div>
          
        </form>
      </div>
    </div>
  );
};


export default Login;
