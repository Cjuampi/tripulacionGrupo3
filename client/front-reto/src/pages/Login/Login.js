import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

import uCookies from 'universal-cookie';
import './Login.css';

const Login = ({ className, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies();
  const objCookies = new uCookies();
  let history = useHistory();

  const loginAxios = async () => {
    try {
      let result = await axios.post('http://localhost:5000/logIn', { userEmail: email, userPassword: password })
      if (result.data.token) {
        addCookie(result.data.token)
        history.push("/");
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getCookieToken = () =>{
    let token = objCookies.get('userToken');
    /* console.log('el token ',token) */
    return token;
  }

  const addCookie = (cookieToken) =>{
    setCookie('userToken', cookieToken, { path: '/' });
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

/*   useEffect(() => {

  }, []); */

  return (
    <div>
      
      <div className="login-section">
        <h1 className="iniciar">Iniciar sesión</h1>
        <form onSubmit={formSubmit}>
          <input className="input_email" type="email" name="email" placeholder="Correo" required onChange={handleEmailChange} />
          <input className="input_password" type="password" name="password" placeholder="Contraseña" required onChange={handlePasswordChange} />

          <input className="login_button" type="submit" name="submit" value="INICIAR SESIÓN" />
        </form>
      </div>
    </div>
  );
};


export default Login;
