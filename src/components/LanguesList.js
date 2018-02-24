import React, { Component } from "react";
import _ from "lodash";

import "./LanguesList.css";

export default class LanguesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            langues: {
                en : {lg: "English", sign: "en"},
                fr: {lg: "Français", sign: "fr"},
                es: {lg:"Español", sign: "es"},
                de: {lg: "Deutsch", sign: "de"},
                it: {lg: "Italiano", sign: "it"}
            }
        }
        this.renderLanguesList = this.renderLanguesList.bind(this);
    }

    renderLanguesList(){
        const languesList = _.map(this.state.langues, langue => {
            return(
                <li key={langue.sign}>{langue.lg}</li>
            );
        });

        return languesList;
    }

    render(){
        return(
            <div className="languesList" >
                <h3>Langues</h3>
                <ul>
                    {this.renderLanguesList()}
                </ul>
            </div>
        )
    }
}