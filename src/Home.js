import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import LoginContext from "./LoginContext";

/** Home page, welcomes everyone! 
*    context:
*     LoginContext used to determine what to show to the user
*/
function Home() {
  
  const { isLoggedIn } = useContext(LoginContext)

  return (
    <div>
      <h1>Jobly</h1>
      <h4>All the jobs in one, convenient place.</h4>
      { isLoggedIn 
      ? <h2> Welcome Back!</h2>
      : <NavLink to="/login">login</NavLink>
      }
    </div>
  )

}

export default Home;