import React, { Component } from "react";

import "./SearchBar.css";


export default class SearchBar extends Component{
    render(){
        return(
            <div>
                <input className="searchbar"
                type="text"
                placeholder="Search..."
                />
            </div>
        )
    }
}