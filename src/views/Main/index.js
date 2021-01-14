import React from "react"
import { Films, Footer, Header, Search } from "../../components"
import styles from "./Main.module.css"

export const MainView = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.searchContainer}>
          <Search />
        </div>

        <section>
          <Films title={"Favoritas"} horizontal={true} fav={true} />
          <Films title={"Disponibles"} />
        </section>
      </main>
      <Footer />
    </>
  )
}
