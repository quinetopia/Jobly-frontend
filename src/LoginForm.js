import React, { useState, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom"
import JoblyApi from "./JoblyApi";
import LoginContext from "./LoginContext"

/**
 * Login form for usesrs.
 *  State:
 *    formData: Keeps track of user input
 *    error: Tracks errors and controls what users see
 *   Context:
 *     LogInContext: Used to set isLoggedIn, which is owned by App and controls what users see
 *  History:
 *    history: Used to redirect user once logged in.
 */

const INITIAL_ERROR = {status: false, message:"There has been an error."}

function LoginForm(){
  const [formData, setFormData] = useState()
  const [ error, setError ] = useState({...INITIAL_ERROR});
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const history = useHistory();


  const handleChange = evt => {
    const {name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name] : value
    
    }));
  };

  // Posts via JoblyApi, when user is logged in sets isLoggedIn 
  // state and redirects to /jobs
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const token = await JoblyApi.loginUser(formData);
      localStorage.setItem("_token", token);
      setIsLoggedIn(true);
      history.push("/jobs");
    } catch(err) {
      if (err.status === 401) {
        setError({status:true, message:err.message});
      }
    }
  }

  function displayError(){
    if (error.status) return ( <h3>{error.message}</h3> );
  }


  return ( isLoggedIn ?
      <Redirect to="/jobs"/>
    :
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username
            <input type="text" name="username" onChange={handleChange}/>
          </label>
          <label>Password
            <input type="password" name="password" onChange={handleChange}/>
          </label>
          <button>Submit</button>
        </form>
        {displayError()}
      </div>
  )

}

export default LoginForm;