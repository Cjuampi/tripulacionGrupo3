import React from "react";
import './App.css';
import Map from './components/Map/Map';
import "leaflet/dist/leaflet.css";
import UserSignup from './components/Signup/UserSignup';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
      
      <Map/>
      <Login/>
      <UserSignup/>
      <Footer/>
    
    </div>
    
  );
}

export default App;
