import React from 'react';
import sawIcon from '../img/saw.svg';

const Homepage = () => {
  return (
      <div>
        <h1>Hand-crafted homes and modular accessories for guinea pigs, hamsters, and other small pets </h1>

        <div className="logoContainer">
            <img className="logoImg" src={sawIcon} alt="saw" />
        </div>
      </div>
  );
}

export default Homepage;