import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { logout, userIsLogged } from "./redux/actions/auth"
import { getData } from "./redux/actions/main"
import { Routes } from "./router/Routes"

export const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.tokenPerseo) {
      dispatch(userIsLogged())
      dispatch(getData(localStorage.tokenPerseo))
    }

    window.addEventListener("storage", () => {
      if (!localStorage.tokenPerseo) dispatch(logout())
    })
    return function cleanup() {
      window.removeEventListener("storage", () => {})
    }
  }, [dispatch])

  return (
    <Router>
      <Switch>
        <Route component={Routes} />
      </Switch>
    </Router>
  )
}
