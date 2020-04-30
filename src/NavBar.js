import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LoginContext from "./LoginContext"

/** Renders the navbar at the top of each page.
 *  Context:
 *    LoginContext: used to control what users see. Updated if users 
 *                  logout from the nav bar
 */
// Move logout up to App. 
function NavBar() {

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)

  // Should NavBar "know how" to log out? Could be in app or a new auth parent.

  function logOut() {
    localStorage.removeItem("_token");
    setIsLoggedIn(false);
  }

  return (
    <div className="NavBar">
      <h4><NavLink to ="/">Jobly</NavLink></h4>
      { isLoggedIn 
      ?<span>
        <p><NavLink to="/jobs">Jobs</NavLink></p>
        <p><NavLink to="/companies">Companies</NavLink></p>
        <p><NavLink to="/profile">Profile</NavLink></p>
        <button onClick={logOut}>Log out</button>
      </span>
      :<span>
        <p><NavLink to="/login">Login</NavLink></p> 
        /<p><NavLink to="/register">register</NavLink></p>
      </span>}
    </div>
  )
}

export default NavBar;