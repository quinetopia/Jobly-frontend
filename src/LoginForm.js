import React, { useState } from "react";
import JoblyApi from "./JoblyApi";

/**
 * Login form for usesrs.
 *  Props:
 *    submitFnc: A function to handle form submission 
 *  State:
 *    formData: Keeps track of user input
 */
function LoginForm({ }){
  const [formData, setFormData] = useState()
  const [ error, setError ] = useState({status: false, message:"There has been an error."});


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
      const token = await JoblyApi.loginUser(formData);
      localStorage.setItem("_token", token);
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
        <button>Submit</button>
      </form>
      {displayError()}
    </div>
  )
}

export default LoginForm;