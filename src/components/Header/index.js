import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Button } from "../Button"
import styles from "./Header.module.css"
import { FiLogOut } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/actions/auth"
import { Profile } from "../Profile"

export const Header = ({ isPlayerView }) => {
  const dispatch = useDispatch()

  return (
    <header className={styles.container}>
      <Profile />

      <nav className={styles.nav}>
        {isPlayerView && (
          <Link to="/main">
            <span className={styles.navLink}>Menú principal</span>
          </Link>
        )}
        <Button
          option={"logout"}
          icon={<FiLogOut />}
          onclick={() => dispatch(logout())}
        >
          Logout
        </Button>
      </nav>
    </header>
  )
}

Header.propTypes = {
  isPlayerView: PropTypes.bool,
}
