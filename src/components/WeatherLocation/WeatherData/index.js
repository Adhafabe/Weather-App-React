import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './../WeatherData/WeatherTemperature';
import WeatherExtraInfo from './../WeatherData/WeatherExtraInfo';
import './style.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constans/weathers';

const  WeatherData = ({data:{temperature, weatherState, humidity, wind}})=> (
    <div className="weatherDataContent">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;