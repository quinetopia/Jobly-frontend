import React from "react";
import { Route, Switch } from "react-router-dom";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";

/** Controls which components to load based on url. 
 */

function Routes() {

  return (
    <Switch>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/companies/:handle"><Company /></Route>
      <Route exact path="/jobs"><Jobs /></Route>
      <Route><div><h1>404, dude</h1></div></Route>
    </Switch>
  )

}

export default Routes;