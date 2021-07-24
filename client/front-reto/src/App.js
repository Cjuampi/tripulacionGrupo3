import React from "react";
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import "leaflet/dist/leaflet.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import utils from './utils/Utils'

import { valuesContext } from './contexts/contextValue'


function App() {
  /* console.log(window.location.pathname) */

  const cntxtValues = {
    token: utils.getCookieToken()
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <valuesContext.Provider value={cntxtValues}>
          <Header />
          <Main />
        </valuesContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
