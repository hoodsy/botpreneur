import React, { Component } from 'react';
import picture from './assets/images/profile_pic.jpg';
import logo from './assets/logo.svg';
import logoBudbot from './assets/images/bots/logo-budbot.jpg';
import logoWeBot from './assets/images/bots/logo-we-bot.jpg';
import logoMessenger from './assets/images/bots/logo-messenger-bot-boilerplate.jpg';
import logoWrinkle from './assets/images/bots/logo-wrinkle.jpg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.renderBotItem = this.renderBotItem.bind(this)
  }

  renderBotItem(botObj, index) {
    return (
      <a className="bot-item" href={botObj.url} key={index}>
        <img className="bot-image" src={botObj.src} alt={botObj.name} />
        <p className="bot-name">{botObj.name}</p>
        <label className="bot-type">{botObj.type}</label>
      </a>
    )
  }

  render() {
    const botItems = [
      {
        src: logoWeBot,
        url: 'https://m.me/WeBot',
        name: 'WeBot',
        type: 'Facebook'
      },
      {
        src: logoWrinkle,
        url: 'https://www.facebook.com/Wrinkle-230875130703194',
        name: 'Wrinkle',
        type: 'Facebook'
      },
      {
        src: logoBudbot,
        url: 'https://www.facebook.com/BudBot-1827797007496925',
        name: 'BudBot',
        type: 'Facebook'
      },
      {
        src: logoMessenger,
        url: 'https://www.facebook.com/messengerbotboilerplate',
        name: 'Bot Boilerplate',
        type: 'Facebook'
      },
    ]

    return (
      <div className="app-container">
        <div className="column column-left">
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

        <div className="column column-right">
          <section className="portfolio-container">
            <h1 className="portfolio-header">
              Recent Bots
            </h1>
            <div className="bot-item-list">
              {botItems.map(this.renderBotItem)}
            </div>
          </section>

          <section className="profiles-container">
            empty
          </section>
        </div>
      </div>
    );
  }
}

export default App;
