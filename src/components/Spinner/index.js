import React from "react"
import styles from "./Spinner.module.css"

export const Spinner = () => {
  return (
    <div className={styles.container}>
      <span className={`${styles.item} ${styles.blue}`}></span>
      <span className={`${styles.item} ${styles.violet}`}></span>
      <span className={`${styles.item} ${styles.green}`}></span>
      <span className={`${styles.item} ${styles.red}`}></span>
    </div>
  )
}
