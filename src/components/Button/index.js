import React from "react"
import styles from "./Button.module.css"
import PropTypes from "prop-types"

export const Button = ({ children, icon, option, onclick }) => {
  let classname = styles[option]
  return (
    <>
      {icon ? (
        <button className={classname} onClick={onclick}>
          {children}
          <span>{icon}</span>
        </button>
      ) : (
        <button className={classname} onClick={onclick}>
          {children}
        </button>
      )}
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.element,
  option: PropTypes.string,
  onclick: PropTypes.func,
}
