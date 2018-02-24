import { combineReducers } from "redux";

import ResponceReducer from "./reducer_responce";
import LangueReducer from "./reducer_langue";


const rootReducers = combineReducers({
    responce: ResponceReducer,
    langue: LangueReducer
})

export default rootReducers;