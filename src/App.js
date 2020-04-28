import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
import NavBar from './NavBar';

/** Main jobly app.  */

function App() {
  return (
   <BrowserRouter>
    <NavBar/>
    <Routes />
   </BrowserRouter>
  );
}

export default App;
