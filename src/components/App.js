import React, { Component } from 'react';
//import moment from 'moment';
//import logo from './logo.svg';
import '../styles/App.css';
import EarthquakeList from '../components/EarthquakeList.js';
import EarthquakeInfo from '../components/EarthquakeInfo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">"Earthquakes!"</div>
        </div>
      <EarthquakeList />
      <EarthquakeInfo />
      </div>
    );
  }
}

export default App;
