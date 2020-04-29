import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Home from "./Home";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


/** Controls which components to load based on url. 
 */

function Routes() {

  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/login"><LoginForm /></Route>
      <Route exact path="/register"><RegistrationForm /></Route>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/companies/:handle"><Company /></Route>
      <Route exact path="/jobs"><Jobs /></Route>
      <Route exact path="/profile"><Profile /></Route>
      <Redirect to="/" /> 
    </Switch>
  )

}

export default Routes;