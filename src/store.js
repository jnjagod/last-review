import { createStore, combineReducers } from "redux";

import authReducer from "./ducks/auth_reducer";
import botReducer from "./ducks/bot_reducer";

const store = createStore(
  combineReducers({ authReducer, botReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
