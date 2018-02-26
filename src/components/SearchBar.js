import React, { Component } from "react";
import { connect } from "react-redux";
import { Search } from "../actions/action";


import "./SearchBar.css";


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e){
        this.props.Search(this.props.langue, e.target.value);
    }

    render(){
        return(
            <div>
                <input className="searchbar"
                onChange={this.onInputChange}
                type="text"
                placeholder="Search..."
                />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        langue: state.langue,
        resp: state.responce    
    }
}


export default connect(mapStateToProps, {Search} )(SearchBar);