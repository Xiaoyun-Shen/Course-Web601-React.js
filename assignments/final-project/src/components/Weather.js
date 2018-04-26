import React from 'react';

const Weather=props=>{
  return(
      <div className="weather-info">

      {props.temperature&&
        <p className="weather-key">Temperature:  <span className="weather-value">{props.temperature}&deg;C</span></p>}
      {props.humidity&&
        <p className="weather-key">Humidity:  <span className="weather-value">{props.humidity}%</span></p>}
      {props.description&&
        <p className="weather-key">Condition:  <span className="weather-value">{props.description}</span></p>}
      {props.error&&
        <p className="weather-key"><span className="weather-value">{props.error}</span></p>}
      </div>
  );
}
export default Weather;
