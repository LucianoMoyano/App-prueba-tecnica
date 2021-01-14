import React from "react"
import { formatDuration } from "../../utils"
import PropTypes from "prop-types"
import styles from "./PlayerComponent.module.css"

export const PlayerList = ({ section, duration, rating }) => {
  return (
    <ul className={styles.infoList}>
      <li className={styles.listItem}>
        Genero:&nbsp;
        <span className={styles.listData}>{section}</span>
      </li>
      <li className={styles.listItem}>
        Duración:&nbsp;
        <span className={styles.listData}>{formatDuration(duration)}</span>
      </li>
      <li className={styles.listItem}>
        Edad:&nbsp;
        <span className={styles.listData}>{rating}</span>
      </li>
    </ul>
  )
}

PlayerList.propTypes = {
  section: PropTypes.string,
  duration: PropTypes.number,
  rating: PropTypes.string,
}
