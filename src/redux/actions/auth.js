import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_ERROR_ALERT,
  USER_LOGGED,
} from "./actionTypes"
import { MD5, encodeURIBody } from "../../utils"
import { getData } from "./main"

// User Is Logged
export const userIsLogged = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGGED,
    })
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    // })
  }
}

// Login
export const login = (email, password) => async (dispatch) => {
  const body = {
    user: email,
    pass: MD5(password),
    device: "Web",
  }

  const URL = "https://dev.perseo.tv/ws/Login.php"

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: encodeURIBody(body),
  }

  try {
    const response = await fetch(URL, options)
    const auth = await response.json()

    // error de la api
    if (auth.error !== true && auth.token) {
      dispatch(loginSuccess(auth))
      localStorage.setItem("tokenPerseo", auth.token)
      dispatch(userIsLogged())
      dispatch(getData(auth.token))
    } else {
      dispatch(loginFail(auth))
      localStorage.removeItem("tokenPerseo")
    }
  } catch (err) {
    console.log(err)
    // manejar error de respuesta
    // dispatch(loginFail(err))
  }
}

const loginSuccess = (auth) => {
  return {
    type: LOGIN_SUCCESS,
    payload: auth,
  }
}

const loginFail = (auth) => {
  return {
    type: LOGIN_FAIL,
    payload: auth,
  }
}

export const removeAlertError = () => {
  return {
    type: REMOVE_ERROR_ALERT,
  }
}

export const logout = () => {
  localStorage.removeItem("tokenPerseo")
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    })
  }
}
