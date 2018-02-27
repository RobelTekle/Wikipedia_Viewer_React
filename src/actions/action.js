import axios from "axios";
// import ReduxThunk from "redux-thunk";

export const SEARCH_TERM = "search_term";
export const NO_MATCH = "no_match";
export const NO_TERME = "no_terme";
export const NEW_TERME = "new_terme";
export const NEW_LANGUE = "new_langue";



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
    //When terme === "" store.responce = {}
    //And store.terme = ""
    if(term===""){
        return {type: NO_TERME, payload: {}}
    };
    //When the terme !== ""
    const url = `https://${lang}.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${term}&limit=6&format=json`;
    const responce = axios.get(url);
    return (dispatch)=>{
        responce.then(({data})=>{
            const dataObj = fromArrayToObj(data);
            //If there is no match store.responce = error
            //And store.terme = terme 
            if(dataObj.undefined){
                dispatch({type: NO_MATCH, payload: {error : "no match"}});
                dispatch({type: NEW_TERME, payload: term});
            } 
            //Otherwise store.responce = dataObj
            //And store.terme = terme
            else { 
                dispatch({type: SEARCH_TERM, payload: dataObj});
                dispatch({type: NEW_TERME, payload: term})
            };

        })
    }

}


export function ChangeLangue(lang, terme){
    return dispatch =>{
        dispatch({ type: NEW_LANGUE, payload: lang });
        dispatch(Search(lang, terme));
    }
}