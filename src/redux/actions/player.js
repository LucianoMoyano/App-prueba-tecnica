import { encodeURIBody } from "../../utils"
import { GET_FILM } from "./actionTypes"

export const getFilm = (id, token) => async (dispatch) => {
  const body = {
    token: token,
    id: id,
    device: "Web",
  }

  const URL = "https://dev.perseo.tv/ws/Play.php"

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: encodeURIBody(body),
  }
  try {
    const response = await fetch(URL, options)
    const film = await response.json()

    dispatch({
      type: GET_FILM,
      payload: film,
    })
  } catch (error) {
    console.log(error)
  }
}
