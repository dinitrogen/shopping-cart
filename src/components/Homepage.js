import React from 'react';
import home from '../img/photos/home.jpg';

const Homepage = () => {
  return (
      <div className="contentDiv">
        <h1>Hand-crafted homes and modular accessories for guinea pigs, hamsters, and other small pets </h1>
        <br/><br/>
        <img className="homeImg" src={home} alt='home' width="40%" />
      </div>
  );
}

export default Homepage;