import React, { useEffect, useState } from "react";
import { BrowserRouter} from 'react-router-dom';
import './App.css';
import "leaflet/dist/leaflet.css";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import utils from './utils/Utils'

import { valuesContext } from './contexts/contextValue'


function App() {

  const [detailE, setDetailE ] = useState('')
  const [findWord, setFindWord] = useState('')
  
  const cntxtValues = {
    token: utils.getCookieToken(),
    detailE,
    setDetailE,
    findWord,
    setFindWord
  }

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

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
