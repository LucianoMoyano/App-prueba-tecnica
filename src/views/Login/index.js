import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { ErrorMessage, Footer, Form } from "../../components"
import styles from "./Login.module.css"

const logoSmall = "assets/images/logoPerseoSmall.png"

export const LoginView = () => {
  const { auth, isAuthenticated } = useSelector((state) => state.authReducer)
  const history = useHistory()

  useEffect(() => {
    if (isAuthenticated) {
      history.push("./main")
    }
  }, [isAuthenticated, history])

  return (
    <main className={styles.container}>
      {auth.error && <ErrorMessage logo={logoSmall} message={auth.message} />}

      <Form logo={logoSmall} />
      <Footer option={true} />
    </main>
  )
}
