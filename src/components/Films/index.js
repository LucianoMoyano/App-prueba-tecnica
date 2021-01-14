import React from "react"
import PropTypes from "prop-types"
import styles from "./Films.module.css"
import { Card } from "../Card"
import { useSelector } from "react-redux"

export const Films = ({ title, horizontal, fav }) => {
  const { data, favoriteFilms } = useSelector((state) => state.mainReducer)

  const filmsContainer = horizontal
    ? `${styles.filmsContainer} ${styles.horizontal}`
    : `${styles.filmsContainer}`

  return (
    <>
      {fav ? (
        <section className={styles.container}>
          <h2 className={styles.titleSec}>
            <strong>{title}</strong>
          </h2>
          <article className={filmsContainer}>
            {favoriteFilms &&
              favoriteFilms.map((film) => (
                <Card fav={true} key={film.id} film={film} />
              ))}
          </article>
        </section>
      ) : (
        <section className={styles.container}>
          <h2 className={styles.titleSec}>
            <strong>{title}</strong>
          </h2>
          <article className={filmsContainer}>
            {data.contents &&
              data.contents.map((film) => <Card key={film.id} film={film} />)}
          </article>
        </section>
      )}
    </>
  )
}

Films.propTypes = {
  title: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
  fav: PropTypes.bool,
}
