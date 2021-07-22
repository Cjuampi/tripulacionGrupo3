import React from "react";
import { BrowserRouter} from 'react-router-dom';
import './App.css';
//import Map from './components/Map/Map';
import "leaflet/dist/leaflet.css";
//import UserSignup from './components/Signup/UserSignup';
//import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';





function App() {

  return (
    <div className="App">
      <BrowserRouter>
            <Header/>
            <Main/>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
