import React, { useState } from "react"

/**
 * User profile.
 * default user data for dummy purposes.
 */

 function Profile({ user={
  username : "testuser", 
  first_name : "Test",
  last_name : " User",
  email : "test@gmail.com",
  photo_url: ""}}){


  const [formData, setFormData] = useState({...user, password:""})

  const handleChange = evt => {
    const {name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name] : value
    
    }));
  };

  function handleSubmit(formData) {
      console.log("Well changed!")
  }

  return (
    <div className="Profile-container">
    Profile
    <div className="Profile-form">
      Username:
      {user.name}
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
        <input type="text" name="femail" value={formData.email} onChange={handleChange}/>
      </label>
      <br/>
      <label>Photo URL
        <input type="text" name="photo_url" value={formData.photo_url} onChange={handleChange}/>
      </label>
      <br/>
      <label>Re-enter your password
        <input type="password" name="password" value={formData.password} onChange={handleChange}/>
      </label>
      <br/>
      <button>Save changes</button>
      </form>
    </div>
    </div>
  )
 }

 export default Profile;

 