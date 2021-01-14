import React from "react"
import { PlayerList } from "./PlayerList"
import styles from "./PlayerComponent.module.css"
import PropTypes from "prop-types"
import ReactPlayer from "react-player"
import { PlayerVotes } from "./PlayerVotes"

export const PlayerComponent = ({ film }) => {
  const {
    title,
    cover,
    duration,
    url,
    section,
    rating,
    votes,
    totalVotes,
  } = film

  return (
    <article className={styles.content}>
      <section className={styles.coverContainer}>
        <figure className={styles.figure}>
          <img className={styles.cover} src={cover} alt={`${title} cover`} />
        </figure>
      </section>
      <section className={styles.infoContainer}>
        <h2 className={styles.title}>{title}</h2>
        <PlayerVotes votes={votes} totalVotes={totalVotes} />

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <PlayerList section={section} duration={duration} rating={rating} />
      </section>
      <section className={styles.playerContainer}>
        {url && (
          <ReactPlayer
            className={styles.reactPlayer}
            playing={false}
            url={url}
            controls
            width="100%"
            height="100%"
            config={{
              file: {
                forceHLS: true,
              },
            }}
          />
        )}
      </section>
    </article>
  )
}

PlayerComponent.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
    duration: PropTypes.number,
    url: PropTypes.string,
    section: PropTypes.string,
    rating: PropTypes.string,
    votes: PropTypes.number,
    totalVotes: PropTypes.number,
  }).isRequired,
}
