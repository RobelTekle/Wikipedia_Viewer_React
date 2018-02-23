import React, { Component } from "react";
import { connect } from "react-redux";
import {SearchTerm} from "../actions/";

import "./SearchBar.css";

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ""
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(e){
        this.setState({term: e.target.value});
        SearchTerm(this.state.term, this.props.langue);
    }


    render(){

        return(
            <div>
                <input 
                onChange={this.onChangeInput}
                value={this.state.term}
                type="text" 
                placeholder="Search..."/>
                <div>{console.log(this.props.response)}</div>

            </div>
        );
    }
}

function mapStateToProps(state){
    return { langue: state.langue, response : state.response };
}
export default connect(mapStateToProps, {SearchTerm})(SearchBar);