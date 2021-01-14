import { useState } from "react"
import { useDispatch } from "react-redux"
import { login, removeAlertError } from "../../redux/actions/auth"
import { Button } from "../Button"
import { FiLogIn } from "react-icons/fi"
import styles from "./Form.module.css"

export const Form = ({ logo }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const dispatch = useDispatch()

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
    dispatch(removeAlertError())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(formData.email, formData.password))
    setFormData({ email: "", password: "" })
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit} method="POST">
      <div className={styles.containerForm}>
      
      </div>
      <div className={styles.containerForm}>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleOnChange}
            autoComplete="off"
          />
          <label className={styles.label} htmlFor="email">
            Email
          </label>
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.input}
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            onChange={handleOnChange}
            minLength="2"
            value={formData.password}
          />
          <label className={styles.label} htmlFor="password">
            Contraseña
          </label>
        </div>

        <Button option={"login"} icon={<FiLogIn />}>
          Login
        </Button>
      </div>
    </form>
  )
}
