import {NEW_TERME} from "../actions/action";
import {NO_TERME} from "../actions/action";

export default function (state = "", action){
    switch (action.type) {
        case NEW_TERME:
            return action.payload;
        case NO_TERME:
            return "";
        default:
            return state;
    }
}