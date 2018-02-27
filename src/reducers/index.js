import { combineReducers } from "redux";

import ResponceReducer from "./reducer_responce";
import LangueReducer from "./reducer_langue";
import TermeReducer from "./reducer_terme";


const rootReducers = combineReducers({
    responce: ResponceReducer,
    langue: LangueReducer,
    terme: TermeReducer
})

export default rootReducers;