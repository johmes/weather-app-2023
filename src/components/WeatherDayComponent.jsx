import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { weatherCodesToIcons } from '../icons.js';

export const WeatherDayComponent = ({ time, weathercode, temperature, units }) => {
  const { temperature: temp_unit } = units;
  const weatherIconObj = weatherCodesToIcons[weathercode] || weatherCodesToIcons['default']

  return (
    <div className="weatherDayComponent">
      <div className="innerWeatherComponent">
        <div>
          <FontAwesomeIcon
            icon={weatherIconObj.icon}
            color={weatherIconObj.color}
            size="7x"
          />
          <p className="secondaryText">{weatherIconObj.description}</p>
        </div>

        <div>
          <p className="temperatureText">{temperature} {temp_unit}</p>
        </div>

      </div>
      <h2>{time}</h2>
    </div>
  )
}