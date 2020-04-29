import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

//Separate out login and signup routes

/**
 * Login page.  Switches between login and sign up.
 */
function Login(){
  const [signUp, setSignUp] = useState(false);

  function submitLogin(formData){
    console.log("You logged in!"); 
  }

  function submitSignUp(formData){
    console.log("You signed up!");
  }

  return (
    <div>
      <button onClick={() => setSignUp(false)}>Login</button>
      <button onClick={() => setSignUp(true)}>Sign up</button>
      {signUp ?
        <SignUpForm submitFnc={submitSignUp}/>
      :
        <LoginForm submitFnc={submitLogin}/>}
    </div>
  )


}

export default Login;