import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REMOVE_ERROR_ALERT,
  USER_LOGGED,
} from "../actions/actionTypes"

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  auth: {},
}

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: payload,
        isAuthenticated: true,
      }
    case USER_LOGGED:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        auth: payload,
        isAuthenticated: false,
      }
    case REMOVE_ERROR_ALERT:
      return {
        ...state,
        auth: { ...state.auth, error: false },
        isAuthenticated: false,
      }

    case LOGOUT:
      return {
        ...state,
        auth: {},
        isAuthenticated: false,
      }
    default:
      return state
  }
}
