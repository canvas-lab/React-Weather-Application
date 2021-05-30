import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header.js';
import Headline from './components/headline/Headline.js';

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <Header/>
        <section className="app-section">
          <Headline headerOfHeadline="The Header" descpOfHeadline="The description"/>
        </section>
      </div>
    );
  }
}

export default App;



