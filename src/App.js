import React, { Component } from 'react';

import SearchBar from "./components/SearchBar";
import ResponceList from "./components/ResponceList";
import Logo from "./components/Logo";
import LanguagesList from "./components/LanguesList";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="aside" >
          <LanguagesList />
        </div>
        <div className="main" >
          <Logo /> 
          <SearchBar />
          <ResponceList />
        </div>
      </div>
    );
  }
}

export default App;
