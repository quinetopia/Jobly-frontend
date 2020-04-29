import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import NavBar from './NavBar';
import LoginContext from  "./LoginContext";
import { checkForToken } from "./helpers"

/** Main jobly app.  
 *  State:
 *    isLoggedIn: Controls what users see on some pages  
*/

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(checkForToken());

  
  return (
   <BrowserRouter>
    <LoginContext.Provider value={ { isLoggedIn, setIsLoggedIn } } >
      <NavBar/>
      <Routes />
    </LoginContext.Provider>
   </BrowserRouter>
  );
}

export default App;
