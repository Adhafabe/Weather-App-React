import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import './style.css';

const WeatherLocation = ({onWeatherLocationClick,city,data}) =>(
 
    <div className="weatherLocationContent" onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data}></WeatherData> : <CircularProgress/>}
    </div>
);

WeatherLocation.propTypes={
    city:  PropTypes.string.isRequired,
    onWeatherLocationClick:  PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WeatherLocation;