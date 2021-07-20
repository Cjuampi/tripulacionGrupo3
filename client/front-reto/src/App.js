import React from "react";
import './App.css';
import Map from './components/map/Map';
import "leaflet/dist/leaflet.css";
import Signup from './components/signup/Signup'


function App() {
  return (
    <div className="App">
      
      <Map/>
      <Signup/>
    
    </div>
    
  );
}

export default App;
