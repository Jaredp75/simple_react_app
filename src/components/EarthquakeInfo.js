import React, { Component } from 'react';
import moment from 'moment';

import earthquakes from '../data/earthquakes.js';

export default class EarthquakeInfo extends Component {
  render() {
  let earthquakeInfo = earthquakes.map((earthquake) => {
    return (
      <div className="earthquake-title">"This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States."</div>
    )
  });


    return (
      <section>
        <div className="quake-info">
          //<div className="row">
          {earthquakeInfo}

          </div>
        </div>
      </section>
    )
  }
}
