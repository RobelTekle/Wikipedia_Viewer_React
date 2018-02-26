import axios from "axios";
// import ReduxThunk from "redux-thunk";



export const SEARCH_TERM = "search_term";


export function Search(lang, term){
    const url = `https://${lang}.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${term}&limit=6&format=json`;
    const responce = axios.get(url);
    return (dispatch)=>{
        responce.then(({data})=>{
            console.log(data);
            dispatch({type: "search_term", payload: data})

        })
    }

}

// export function Search(lang, term){
//         const url = `https://${lang}.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${term}&limit=6&format=json`;
//         axios.get(url)
//             .then((resp)=>{
//                 console.log(resp.data);
//                 return{type: "search_term", payload: resp.data }
//             })
// }