import { combineReducers } from "redux";
import userReducer from "./userReducer";
import entrepriseReducer from "./entrepriseReducer";
import offreReducer from "./offreReducer";
import reducerJob from "./reducerJob"

const rootReducer = combineReducers({
  userReducer,
  // entrepriseReducer,
  offreReducer,
  reducerJob,

});

export default rootReducer;
