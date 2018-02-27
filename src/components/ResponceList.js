import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";

import "./ResponceList.css";


class ResponceList extends Component{
    constructor(props){
        super(props);
        this.renderRespList = this.renderRespList.bind(this);
    }

    renderRespList(){

        //If there is no match
        if(this.props.responce.error){
            let message = "";
            switch (this.props.langue) {
                case "fr":
                    message = "Aucun résultat trouvé";
                    break;
                case "en": 
                    message = "No results found";
                    break;
                case "it":
                    message = "Nessun risultato trovato";
                    break;
                case "es":
                    message = "No se encontraron resultados";
                    break;
                case "de":
                    message = "Keine Ergebnisse gefunden";
                    break;
                }
            return(
                <h4>{message}</h4>
            )
        }


        //If we have a match
        let info = "";
        switch (this.props.langue) {
            case "fr":
                info = "Plus d'informations";
                break;
            case "en": 
                info = "More informations";
                break;
            case "it":
                info = "Maggiori informazioni";
                break;
            case "es":
                info = "Más información";
                break;
            case "de":
                info = "Mehr Informationen";
                break;
            }

        const respList = _.map(this.props.responce, resp => {
            return (
                <div className="resp">
                    <h5>{resp.term}</h5>
                    <p>{resp.expl}</p>
                    <a href={resp.link} target="_blank" >{info}</a>
                </div>
            );
        });
        return respList;
    }



    render(){
        return(
            <div>
                <ul>
                    {this.renderRespList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({responce, langue}){
    return{responce, langue}
}

export default connect(mapStateToProps)(ResponceList)