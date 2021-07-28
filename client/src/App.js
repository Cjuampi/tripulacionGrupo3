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

  const [detailE, setDetailE] = useState('')
  const [findWord, setFindWord] = useState('')
  const [inputWord, setinputWord] = useState('')
  const [inputWordS, setinputWordS] = useState('')
  const [token, setToken] = useState(utils.getCookieToken('userToken'))
  const [userNameDfun, setUserNameDfun] = useState(utils.getCookieToken('userName'))
  const [userEmailDfun, setUserEmailDfun] = useState(utils.getCookieToken('userEmail'))
  const [wordSrchMap, setWordSrchMap] = useState(utils.getCookieToken('userEmail'))

  const cntxtValues = {
    token,
    setToken,
    detailE,
    setDetailE,
    findWord,
    setFindWord,
    inputWord,
    setinputWord,
    userNameDfun,
    setUserNameDfun,
    userEmailDfun,
    setUserEmailDfun,
    wordSrchMap,
    setWordSrchMap,
    inputWordS,
    setinputWordS,
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
