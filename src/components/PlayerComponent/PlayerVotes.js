import React from "react"
import PropTypes from "prop-types"
import styles from "./PlayerComponent.module.css"

export const PlayerVotes = ({ votes, totalVotes }) => {
  return (
    <div>
      <p className={styles.votes}>
        ({votes} votos de {totalVotes} votos en total)
      </p>
      {/* <p>`(${votes} votos, promedio: 4,00 de 5)`</p> */}
    </div>
  )
}

PlayerVotes.propTypes = {
  votes: PropTypes.number,
  totalVotes: PropTypes.number,
}
