import counter from "./counterReducer";
import currentUser from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
     counter, currentUser 
});

export default rootReducer;