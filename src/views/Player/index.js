import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getFilm } from "../../redux/actions/player"
import { Footer, Header, PlayerComponent, Spinner } from "../../components"

import styles from "./Player.module.css"

export const PlayerView = () => {
  const dispatch = useDispatch()
  let { id } = useParams()
  const { film } = useSelector((state) => state.playerReducer)

  useEffect(() => {
    dispatch(getFilm(id, localStorage.tokenPerseo))
  }, [id, dispatch])

  return (
    <>
      <Header isPlayerView={true} />
      <main className={styles.container}>
        {!film ? <Spinner /> : <PlayerComponent film={film} />}
      </main>
      <Footer />
    </>
  )
}
