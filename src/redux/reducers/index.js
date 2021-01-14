import { combineReducers } from "redux"
import { authReducer } from "./auth"
import { playerReducer } from "./player"
import { mainReducer } from "./main"

export default combineReducers({
  authReducer,
  playerReducer,
  mainReducer,
})
