import {SEARCH_TERM} from "../actions/action";
import {NO_MATCH} from "../actions/action";
import {NO_TERME} from "../actions/action";


export default function(state = {}, action){
    switch (action.type) {
        case SEARCH_TERM:
        return action.payload;
        case NO_TERME:
        return action.payload;
        case NO_MATCH:
        return action.payload;
        default:
        return state;
    }
}