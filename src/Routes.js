import React from "react";
import { Route, Switch } from "react-router-dom";
import Companies from "./Companies";

function Routes() {

  return (
    <Switch>
      <Route exact path="/companies"><Companies /></Route>
    </Switch>
  )

}

export default Routes;