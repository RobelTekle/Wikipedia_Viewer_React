

export default function(state = {}, action){
    switch (action.type) {
        case "ACTION EN COURS":
            return action.payload;
            break;
    
        default:
            return "ERRORE"
            break;
    }
}