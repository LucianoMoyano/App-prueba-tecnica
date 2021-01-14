import React from "react"
import styles from "./Profile.module.css"
import { useSelector } from "react-redux"

export const Profile = () => {
  const { data } = useSelector((state) => state.mainReducer)

  return (
    <article className={styles.container}>
      {data.user ? (
        <>
          <img
            src={data.user.avatar}
            alt="avatar user"
            className={styles.imgProfile}
          />
          <span className={styles.username}>{data.user.name}</span>
        </>
      ) : (
        <>
          
          <span className={styles.username}>Luciano Moyano</span>
        </>
      )}
    </article>
  )
}
