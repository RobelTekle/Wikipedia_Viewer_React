import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";

import "./LanguesList.css";
import {ChangeLangue} from "../actions/action";

class LanguesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            langues: {
                en: {lg: "English", sign: "en"},
                fr: {lg: "Français", sign: "fr"},
                es: {lg:"Español", sign: "es"},
                de: {lg: "Deutsch", sign: "de"},
                it: {lg: "Italiano", sign: "it"}
            }
        }
        this.renderLanguesList = this.renderLanguesList.bind(this);
        this.clickLangue = this.clickLangue.bind(this);
    }

    clickLangue(e){
        this.props.ChangeLangue(e.target.lang, this.props.terme);
        e.target.className="selected";
    }

    



    renderLanguesList(){
        const languesList = _.map(this.state.langues, langue => {
            let selected = "";
            if(this.props.langue===langue.sign){
                selected = "selected";
            };
            return(
                <li 
                key={langue.sign} 
                lang={langue.sign} 
                onClick={this.clickLangue}
                className={selected}
                >
                    {langue.lg}
                </li>
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

function mapStateToProps({terme, langue}){
    return {terme, langue};
}

export default connect(mapStateToProps, {ChangeLangue})(LanguesList);