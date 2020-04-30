import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import NavBar from './NavBar';
import LoginContext from  "./LoginContext";
import { checkForToken } from "./helpers"
import jwt from "jsonwebtoken";
import JoblyApi from "./JoblyApi";

/** Main jobly app.  
 *  State:
 *    isLoggedIn: Controls what users see on some pages  
*/

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(checkForToken());
  const [ user, setUser ] = useState()
  
  useEffect(() => {
    async function getUserData() {
      const token = localStorage.getItem("_token");
      if (token) {
        const username = jwt.decode(token).username;
        const userData = await JoblyApi.getUser(username);
        setUser(userData);
      } 
      
    }
    getUserData();
  }, [isLoggedIn]);

  return (
   <BrowserRouter>
    <LoginContext.Provider value={ { isLoggedIn, setIsLoggedIn, user, setUser } } >
      <NavBar/>
      <Routes />
    </LoginContext.Provider>
   </BrowserRouter>
  );
}

export default App;
