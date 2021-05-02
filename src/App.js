import './App.css';
import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Rate from './Rate/Rate.js';
import About from './About/About.js';
class App extends React.Component {

  render() {
    return (
      <div className="site">
        <Header/>
        <div className="container">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Rate} />
                <Route exact path="/about" component={About} />
              </Switch>
            </Router>
          </main>
        </div>

        <div className="container" id="cookie_info">
          <div className="site-content">
            <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера. <br/> 
            В частности мы обрабатываем Ip адрес вашего региона.</div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
