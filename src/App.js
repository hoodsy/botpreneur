import React, { Component } from 'react';
import picture from './assets/images/profile_pic.jpg';
import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <section className="bio-container">
          <div>
            <img className="profile-picture" src={picture} alt="Logan Bernard, Botpreneur" />
          </div>
          <div className="column">
            <h1 className="name">Logan Bernard</h1>
            <img className="logo" src={logo} alt="Botpreneur" />
            <p></p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
