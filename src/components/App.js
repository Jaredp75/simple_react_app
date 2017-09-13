import React, { Component } from 'react';
import moment from 'moment';

//import logo from './logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title"></div>
          <div className="my-header">"Earthquakes!"</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
