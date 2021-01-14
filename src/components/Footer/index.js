import React from "react"
import PropTypes from "prop-types"
import styles from "./Footer.module.css"

export const Footer = ({ option }) => {
  const footer = option
    ? `${styles.footer} ${styles.login}`
    : `${styles.footer}`
  return (
    <footer className={footer}>
      <p className={styles.text}>
        Prueba técnica React | Desarrollada por Luciano Moyano
      </p>
    </footer>
  )
}

Footer.propTypes = {
  login: PropTypes.bool,
}
