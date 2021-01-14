import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import { LoginView, MainView, NotFound, PlayerView } from "../views"
import { PrivateRoute } from "./PrivateRoute"

export const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/login" component={LoginView} />
        <PrivateRoute exact path="/main" component={MainView} />
        <PrivateRoute path="/player/:id" component={PlayerView} />
        <PrivateRoute exact path="/" render={() => <Redirect to="/main" />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  )
}
