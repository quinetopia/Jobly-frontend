import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Companies from "./Companies";
import Company from "./Company"

function Routes() {

  
  return (
    <Switch>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/companies/:handle"><Company /></Route>
      {/* <Route exact path="/jobs"><Companies /></Route> */}
    </Switch>
  )

}

export default Routes;