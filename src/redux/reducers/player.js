import { GET_FILM } from "../actions/actionTypes"

const initialState = {
  token: localStorage.getItem("tokenPerseo"),
  film: {},
}

export const playerReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_FILM:
      return {
        ...state,
        film: payload,
      }

    default:
      return state
  }
}
