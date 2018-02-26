import axios from "axios";
// import ReduxThunk from "redux-thunk";

export const SEARCH_TERM = "search_term";



function fromArrayToObj(array) {
    let obj = {};
    for(var i = 0; i < array[1].length; i++){
        obj = {...obj, [array[1][i]] : {
            term : array[1][i], 
            expl : array[2][i],
            link : array[3][i]    
        } } 
    };
    return obj;
}


export function Search(lang, term){
    const url = `https://${lang}.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${term}&limit=6&format=json`;
    const responce = axios.get(url);
    return (dispatch)=>{
        responce.then(({data})=>{
            const dataObj = fromArrayToObj(data);
            console.log(dataObj);
            dispatch({type: "search_term", payload: dataObj})

        })
    }

}
