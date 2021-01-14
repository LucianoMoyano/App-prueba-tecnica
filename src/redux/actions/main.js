import { encodeURIBody } from "../../utils"
import { GET_DATA, GET_FAVS_FILMS, SEARCH_FILMS } from "./actionTypes"

// Data de la API
export const getData = (token) => async (dispatch) => {
  const body = {
    token: token,
    device: "Web",
  }

  const URL = "https://dev.perseo.tv/ws/GetView.php"

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: encodeURIBody(body),
  }
  try {
    const response = await fetch(URL, options)
    const data = await response.json()

    dispatch({
      type: GET_DATA,
      payload: data,
    })

    dispatch(getFavsFilms(data, data.user.favs))
  } catch (error) {
    console.log(error)
  }
}

// favoritos
export const getFavsFilms = (data, favs) => {
  let favoriteFilms = data.contents.filter((item) => favs.includes(item.id))

  return {
    type: GET_FAVS_FILMS,
    payload: favoriteFilms,
  }
}

// busqueda
export const searchFilms = (value, data) => (dispatch) => {
  let searchValue = value.toLowerCase()

  console.log("data", data.contents)

  let searchFilms = data.contents.filter((item) => {
    let formattedTitle = item.title.toLowerCase()
    return formattedTitle.indexOf(searchValue) > -1
  })
  console.log("peliculas buscadas", searchFilms)
  dispatch({
    type: SEARCH_FILMS,
    payload: searchFilms,
  })
}
