import axios from "axios";
// import ReduxThunk from "redux-thunk";

export const SEARCH_TERM = "search_term";
export const NO_MATCH = "no_match";
export const NO_TERME = "no_terme";



function fromArrayToObj(array) {
    let obj = {};
    for(var i = 0; i < 6; i++){
        obj = {...obj, [array[1][i]] : {
            term : array[1][i], 
            expl : array[2][i],
            link : array[3][i]    
        } } 
    };
    return obj;
}


export function Search(lang, term){
    //When the term === "" return an empty object 
    if(term===""){
        return {type: NO_TERME, payload: {}}
    };
    //When the term !== ""
    const url = `https://${lang}.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${term}&limit=6&format=json`;
    const responce = axios.get(url);
    return (dispatch)=>{
        responce.then(({data})=>{
            const dataObj = fromArrayToObj(data);
            //If there is no match return an error 
            console.log(dataObj);
            if(dataObj.undefined){
                dispatch({type: NO_MATCH, payload: {error : "no match"}})
            } 
            //Otherwise dipatch dataObj
            else { dispatch({type: SEARCH_TERM, payload: dataObj})};

        })
    }

}
