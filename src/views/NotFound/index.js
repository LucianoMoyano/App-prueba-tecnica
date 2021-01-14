import React from "react"
import { useHistory } from "react-router-dom"
import { Button, Footer } from "../../components"
import { FiCornerUpLeft } from "react-icons/fi"
import styles from "./NotFound.module.css"



export const NotFound = () => {
  const history = useHistory()
  return (
    <>
      <main className={styles.container}>
        <figure className={styles.logoContainer}>
          
        </figure>
        <div className={styles.messageContainer}>
          <h1 className={styles.title}>Opps!</h1>
          <p className={styles.desc}>La pagina que usted quiere buscar no esta disponible !</p>
          <Button
            option={"return"}
            icon={<FiCornerUpLeft />}
            onclick={() => history.push("/main")}
          >
            Volver
          </Button>
        </div>
      </main>
      <Footer />
    </>
  )
}
