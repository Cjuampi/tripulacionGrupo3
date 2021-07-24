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
        <h1>Acceso</h1>
        Usa tu cuenta D-Fun
        <form onSubmit={formSubmit}>
          <input type="email" name="email" placeholder="Correo" required onChange={handleEmailChange} />
          <input type="password" name="password" placeholder="Contraseña" required onChange={handlePasswordChange} />
          <input type="submit" name="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};


export default Login;
