import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import jwt from "jsonwebtoken";
import JoblyApi from "./JoblyApi";

function Auth() {
  const [ user, setUser ] = useState();
  const [ userChanged, setUserChanged ] = useState(false);

  // Loads user data
  useEffect(() => {
    async function getUserData() {
      const token = localStorage.getItem("_token");
      if (token) {
        const username = jwt.decode(token).username;
        const userData = await JoblyApi.getUser(username);
        setUser(userData);

      } 
      
    }
    if (userChanged) {
      getUserData();
      setUserChanged(false);
    } 
  }, [userChanged]);


  return (
    <Routes user={user} />
  )
}

export default Auth;
