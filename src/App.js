import React, { Component } from 'react';
import picture from './assets/images/profile_pic.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="picture">
          <img className="profile-picture" src={picture} alt="Logan Bernard, Botpreneur" />
        </div>
        <h1></h1>
      </div>
    );
  }
}

export default App;
