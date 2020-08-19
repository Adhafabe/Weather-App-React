import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css';

const renderForecastItemDay = (forecastData)=>{
    return forecastData.map( forecast => (
        <ForecastItem
            key={`${forecast.weekday} ${forecast.hour}`}
            weekDay={forecast.weekday}
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>
    ));
}

const rederProgress = () =>{
    return <h3>cargando pronostico extendido ...</h3>;
}

const ForecastExtended = ({city, forecastData}) => (

        <div className="forecastContent">
            <div className="pronosticoTitle">
                <h2>Pronóstico extendido para</h2>
                <h3>{city}</h3>
                {forecastData ? renderForecastItemDay(forecastData) :rederProgress()}
            </div>
        </div>
    
);

ForecastExtended.propTypes={
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;