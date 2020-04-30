import React, { useState, useContext, useEffect } from "react"
import LoginContext from "./LoginContext";
import JoblyApi from "./JoblyApi";

/**
 * User profile.
 * default user data for dummy purposes.
 */

function Profile(){
  const { user, setUser } = useContext(LoginContext);
  const [formData, setFormData] = useState(null);
  const [ error, setError ] = useState({status: false, message: "There has been an error."})

  useEffect(function() {
    console.log("Effect run!");
    setFormData(oldData => ({...user, password:""}));
    }, [user])


  const handleChange = evt => {
    const {name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name] : value
    
    }));
  };

  async function  handleSubmit(evt) {
    evt.preventDefault();
    //Could have a validateform function
    
    try {
      await JoblyApi.updateUser(formData);
    } catch(err) {
      if (err.status === 401) {
        setError({status: true, message: err.message});
      } else {
        setError({status: true, message:err.message});
      }
    }
  }

  return (
    <div className="Profile-container">
      <h2>Profile</h2>
      {formData 
      ? <div className="Profile-form">
        <p> Username: {formData.username} </p>
        <form onSubmit={handleSubmit}>
        <label>First name
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange}/>
        </label>
        <br/>
        <label> Last name
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange}/>
        </label>
        <br/>
        <label>Email
          <input type="text" name="email" value={formData.email} onChange={handleChange}/>
        </label>
        <br/>
        <label>Photo URL
          <input type="text" name="photo_url" value={formData.photo_url || ""} onChange={handleChange}/>
        </label>
        <br/>
        <label>Re-enter your password
          <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
        </label>
        <br/>
        <button>Save changes</button>
        </form> 
      </div>
      : <h2>Loading user data...</h2>
      }
      {error.status 
        ? <h3>{error.message}</h3>
        : ""
      }
    </div>
  )
 }

 export default Profile;

 