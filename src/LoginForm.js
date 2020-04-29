import React, { useState } from "react";

/**
 * Login form for usesrs.
 *  Props:
 *    submitFnc: A function to handle form submission 
 *  State:
 *    formData: Keeps track of user input
 */
function LoginForm({ submitFnc }){
  const [formData, setFormData] = useState()


  const handleChange = evt => {
    const {name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name] : value
    
    }));
  };

  const handleSubmit = evt => {
    submitFnc(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username
        <input type="text" name="Username" onChange={handleChange}/>
      </label>
      <label>Password
        <input type="password" name="Password" onChange={handleChange}/>
      </label>
      <button>Submit</button>
    </form>
  )
}

export default LoginForm;