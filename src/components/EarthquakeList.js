import React, { Component } from 'react';
import moment from 'moment';

import earthquakes from '../data/earthquakes.js';




export default class EarthquakeList extends Component {
  render() {
  let earthquakeList = earthquakes.map((earthquake) => {
    return (
      <div className="col-sm-6" key={earthquakes.id}>
        <div className="card" >
          <div className="card-block">
            <h4 className="card-title">{earthquakes.place}</h4>
            <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquakes.mag}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquakes.time).format('llll')}</h6>
            <p className="card-text">Coordinates: {earthquakes.coordinates}</p>

            <a href={earthquakes.url} className="card-link">USGS Event Link</a>

    </div>
  </div>
</div>
    )
  });


    return (
      <section>
        <div className="quake-list">
          //<div className="row">
          {earthquakeList}

          </div>
        </div>
      </section>
    )
  }
}
