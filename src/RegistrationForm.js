import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom"
import JoblyApi from "./JoblyApi";
import LoginContext from "./LoginContext"

/**
 * Registration form for usesrs.
 *  State:
 *    formData: Keeps track of user input
 *    error: Tracks errors and used to determine what to show to user
 *  Context: LoginContext, used to determine what to show to user
 *  History: Used to redirect once user loggedin.
 */

const INITIAL_ERROR = {status: false, message:"There has been an error."}

function RegistrationForm(){
  const [formData, setFormData] = useState()
  const [ error, setError ] = useState({...INITIAL_ERROR});
  const { setIsLoggedIn} = useContext(LoginContext);
  const history = useHistory();


  const handleChange = evt => {
    const {name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name] : value
    
    }));
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const token = await JoblyApi.registerUser(formData);
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


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username
          <input type="text" name="username" onChange={handleChange}/>
        </label>
        <label>Password
          <input type="password" name="password" onChange={handleChange}/>
        </label>
        <label>First name
          <input type="text" name="first_name" onChange={handleChange}/>
        </label>
        <label>Last name
          <input type="text" name="last_name" onChange={handleChange}/>
        </label>
        <label>Email
          <input type="text" name="email" onChange={handleChange}/>
        </label>
        <button>Submit</button>
      </form>
      {displayError()}
    </div>
  )
}

export default RegistrationForm;