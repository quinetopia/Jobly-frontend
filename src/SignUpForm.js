import React, { useState } from "react";

/**
 * Sign Up form for usesrs.
 *  Props:
 *    submitFnc: A function to handle form submission 
 *  State:
 *    formData: Keeps track of user input
 */
function SignUpForm({ submitFnc }){
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
      <label>First name
        <input type="text" name="first_name" onChange={handleChange}/>
      </label>
      <label>Last name
        <input type="text" name="last_name" onChange={handleChange}/>
      </label>
      <label>email
        <input type="text" name="email" onChange={handleChange}/>
      </label>
      <button>Submit</button>
    </form>
  )
}

export default SignUpForm;