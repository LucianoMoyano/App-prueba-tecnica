import React, { useState } from "react"
import styles from "./Search.module.css"
import { FaTrashAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { getData, searchFilms } from "../../redux/actions/main"

export const Search = () => {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.mainReducer)

  const handleOnChange = (event) => {
    setInputValue(event.target.value)
    if (event.target.value === "") {
      dispatch(getData(localStorage.tokenPerseo))
    }
    dispatch(searchFilms(inputValue, data))
  }

  const clearInput = () => {
    dispatch(getData(localStorage.tokenPerseo))
    setInputValue("")
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        placeholder="Buscar"
        value={inputValue}
        onChange={handleOnChange}
      />
      <button
        className={styles.button}
        type="submit"
        onClick={() => clearInput()}
      >
        <FaTrashAlt />
      </button>
    </div>
  )
}
