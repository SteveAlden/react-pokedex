import React from 'react';
import * as img1 from './pokedex/';

function DisplayImages() {
  for (let i = 1; i <= 151; i++) {
    let uri = `./pokemon/${i}.png`;
    return <img src={img1} />;
  }
}

export default DisplayImages;
