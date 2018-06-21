import React from 'react';
import ReactDOM from 'react-dom';
import DonationWidget from './DonationWidget';

const main = document.getElementById('main');

ReactDOM.render(
  <div>
    <DonationWidget value={50} />
  </div>,
  main
)