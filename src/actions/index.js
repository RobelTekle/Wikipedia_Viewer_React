import axios from "axios";

export const SEARCH = "search";



export function SearchTerm(term, lang){
    const url = `https://${lang}.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${term}&limit=6&format=json`;
    const request = axios.get(url);
    return (dispatch) => {
        request.then(({data})=> {
            console.log(data);
            dispatch({ type: SEARCH, payload: data })
        });
    };
}




