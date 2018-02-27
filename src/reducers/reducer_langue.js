import {NEW_LANGUE} from "../actions/action";

export default function(state = "fr", action){
    switch (action.type) {
        case NEW_LANGUE:
            return action.payload;    
        default:
            return state;
    }
}