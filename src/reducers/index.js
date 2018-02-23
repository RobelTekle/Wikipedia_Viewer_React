import { combineReducers } from "redux";
import SelectedLanguage from "./reducer_selectedLang";
import Response from "./reducer_response";

const rootReducers = combineReducers({
    langue: SelectedLanguage,
    response: Response
})

export default rootReducers;