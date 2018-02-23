import React, { Component } from 'react';

import './App.css';
import LanguagesList from "./components/LanguagesList";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import ResponceList from "./components/ResponceList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <LanguagesList />
        </div>
        <div>
          <Logo /> 
          <SearchBar />
          <ResponceList />
        </div>
      </div>
    );
  }
}

export default App;
