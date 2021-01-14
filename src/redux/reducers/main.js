import {
  ADD_ID_FAVS,
  GET_DATA,
  GET_FAVS_FILMS,
  REMOVE_ID_FAVS,
  SEARCH_FILMS,
} from "../actions/actionTypes"

const initialState = {
  token: localStorage.getItem("tokenPerseo"),
  data: {},
  favsId: {},
  favoriteFilms: [],
}

export const mainReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        data: payload,
        favsId: payload.user.favs,
      }

    case GET_FAVS_FILMS:
      return {
        ...state,
        favoriteFilms: payload,
      }

    case SEARCH_FILMS:
      return {
        ...state,
        data: { ...state.data, contents: payload },
      }

    case ADD_ID_FAVS:
      return {
        ...state,
        favsId: [payload, ...state.favsId],
      }
    case REMOVE_ID_FAVS:
      return {
        ...state,
        favsId: state.favsId.filter((id) => id !== payload),
      }

    default:
      return state
  }
}
