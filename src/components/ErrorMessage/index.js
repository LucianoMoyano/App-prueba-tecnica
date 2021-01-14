import styles from "./ErrorMessage.module.css"
import PropTypes from "prop-types"

export const ErrorMessage = ({ logo, message }) => {
  return (
    <div className={styles.container}>
   
      <p className={styles.message}>{message}</p>
    </div>
  )
}


