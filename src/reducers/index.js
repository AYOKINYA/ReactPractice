import counter from "./counterReducer";
import currentUser from "./userReducer";
import { combineReducers } from "redux";
import posts from "./postReducer"

const rootReducer = combineReducers({
     counter,
     currentUser,
     posts
});

export default rootReducer;