import React, { useState } from "react";
import './App.css';
import axios from 'axios'
/* import Map from './components/map/Map';
import "leaflet/dist/leaflet.css"; */
//import Signup from './components/signup/Signup'
/* import RegisterScreen from "./components/login/Login"; */



function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginAxios = async () =>{
    let result = await axios.post('http://localhost:3000/logIn',{userEmail:email, userPassword:password})
    console.log(result)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    loginAxios()

  }

  const onChangeN = (e) =>{
    setName(e.target.value)
  }

  const onChangeE = (e) =>{
    setEmail(e.target.value)
  }

  const onChangeP = (e) =>{
    setPassword(e.target.value)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
       {/*  Nombre;
        <input type='text' id="userName" class="userName" onChange={onChangeN}/><br/> */}
        Email
        <input type='text' id="userEmail" class="userEmail" onChange={onChangeE}/><br/>
        Password
        <input type='text' id="userPassword" class="userPassword" onChange={onChangeP}/><br/>
        <input type="submit" />
      </form>
{/*       <Map/>
      <RegisterScreen/> */}
    
    </div>
    
  );
}

export default App;
