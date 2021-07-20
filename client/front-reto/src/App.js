import React from "react";
import './App.css';
import Map from './components/map/Map';
import "leaflet/dist/leaflet.css";
//import Signup from './components/signup/Signup'
import RegisterScreen from "./components/login/Login";


function App() {
  return (
    <div className="App">
      
      <Map/>
      <RegisterScreen/>
    
    </div>
    
  );
}

export default App;
